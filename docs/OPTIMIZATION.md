# 修复契约 · lunch-gacha

> 本文件是本次改造的**唯一口径来源**。执行者（子 Agent）遇到歧义时按本文件判断，不要自行发挥。
> 上级 Agent 负责验收与提交。

## 一、文件归属

| 文件 | 归属 | 说明 |
|---|---|---|
| `index.html` | **执行者独占** | 本次所有代码修改只动这一个文件 |
| `docs/OPTIMIZATION.md` | 上级独占 | 执行者只读，不要改 |
| `README.md` | 上级独占 | 执行者只读，不要改 |
| `LICENSE` / `.gitignore` / `data.json` | 上级独占 | 执行者只读，不要改 |

**只改 `index.html`**。不要拆分文件、不要引入构建步骤、不要新增依赖、不要改文件名。
项目核心卖点是「单文件自包含、双击就能开」，必须保持。

## 二、明确不做（越界即返工）

- ❌ 不加任何运行时依赖、CDN 引用、npm 包、外网请求
- ❌ 不拆分 CSS/JS 到外部文件，不引入构建工具
- ❌ 不改视觉风格、不重做配色/布局（除非本契约明确要求）
- ❌ 不加后端、不加服务端、不做云同步
- ❌ 不改 `.workbuddy/`（私有目录，已被 `.gitignore` 排除）
- ❌ 不动 `data.json` 的字段名（除非契约 §4 明确新增）
- ❌ 不执行 git 提交、不推送、不部署
- ❌ 不做大规模重构，不重写整个 script 块

## 三、修复清单

按严重度排序。**每条都要改**，不要挑软柿子。

### 严重

**S1. `data.json` 自动加载是死功能（当前永远不生效）**

现状：`fetch` 回调在 `rollover()` → `save()` 之后才跑，`S.updatedAt` 已被置为 `Date.now()`，
于是 `!S.updatedAt` 恒为 false；而文件侧 `updatedAt: 0` 是 falsy，整个条件恒为 false。
结果：全新浏览器也**不会**导入同目录 data.json，README 里描述的功能形同虚设。

改法：把「文件版本」与「本地时间戳」彻底分离。

- `data.json` 增加字段 **`version`**（数字，由文件侧维护）。导出时自动写入一个比旧值大的数。
- 本地 localStorage 存 **`dataVersion`**：表示「已经加载过哪个版本的 data.json」。
- 加载判定改为 **不相等即加载**，不做大小比较：
  `j.version` 是数字 且 `j.version !== S.dataVersion` → 导入，并把 `S.dataVersion = j.version`。
- `save()` **不再**改动 `dataVersion`（本地时间戳和文件版本不是一回事）。
- `importObj()` 负责写 `S.dataVersion`。
- 兼容旧文件：若 `j.version` 缺失或不是数字，则**跳过自动加载**（保持现状静默），但手动「导入 data.json」按钮仍然允许导入，并在提示里说明「该文件没有 version 字段」。
- 仓库里现存的 `data.json` 也要能跑：上级 Agent 会给它补 `version: 1`。**你只改 index.html。**
- 自动导入成功后，`showStoreMode()` 要明确显示「已自动载入 data.json（版本 N）」。
- 自动导入**不得**静默覆盖用户浏览器里已有的当周抽签结果 —— 用 version 机制天然保证：
  浏览器里抽过签后 `dataVersion` 已被记下，文件版本没变就不会被覆盖。

**S2. 导入的 history/results 结构不校验，一条脏记录让整页崩溃**

现状：`lastEaten()` 里 `h.items.forEach` 无保护。导入 `{"history":[{"weekStart":"2026-10-20"}]}`
→ `TypeError` → 初始化中断 → 页面空白、按钮全失效。

改法：在 `importObj()` 里做**逐条校验**，不合法的整条丢弃：

- `history` 每条必须是对象；`weekStart` 必须是可被 `parseYmd` 解析的字符串；`items` 必须是数组；
  `items` 每项必须含字符串 `name`、字符串 `rarity`（且属于 R/SR/SSR/UR 四个之一）、可解析的 `date`。
- `results` 每项同理校验（`name` / `rarity` / `date`）。
- 不合法的条目**丢弃**，并在导入后的提示里报告「丢弃了 N 条无效记录」。
- 同时给 `lastEaten()`、`allRecords()` 加一层防御：遇到结构不对的记录**跳过**而不是抛错
  （防止绕过导入路径的其他脏数据）。

**S3. 抽签链路无 try/catch/finally，一次异常就让 UI 永久卡死**

现状：`setBusy(true)` 之后任何异常都会跳过 `setBusy(false)`，三个按钮永久 disabled，页面变砖。
触发点包括 `Element.animate`（旧 Safari/Firefox）、`track.getAnimations()`、以及任意运行时错误。

改法：

- `drawDay()` 整体包 `try { ... } catch(err) { 提示用户 } finally { setBusy(false); }`。
- 捕获后要**给用户看得懂的提示**（用页面内的提示条，不要只用 `alert`），例如
  「这次抽签出错了（已跳过动画），菜单仍可正常使用」。
- `drawAll()` 的 `while` 循环里 `await drawDay()` 的 rejection 要被吃掉，不能让整个循环崩掉。
- 对 `Element.animate` / `getAnimations` 做**能力检测**：不支持时降级为「直接切到结果」，
  不能抛错阻断抽签。降级路径要保证最终结果一样能落到菜单里。

**S4. `rarity` 未转义就拼进 innerHTML → 导入 data.json 即可注入 HTML**

现状：`html += "<div class='rar c-"+r.rarity+"'>"+r.rarity+"</div>"` 无任何过滤，
而 `rarity` 来自导入文件且完全未校验。改 `rarity` 为 `x"><img src=x onerror=alert(1)>` 即可执行。

改法：

- `esc()` 补上单引号 `'` → `&#39;`（现在的 `esc` 只处理 `& < > "`）。
- `renderDays()` 里所有插入 `rarity` 的地方都必须过 `esc()`。
- 更稳的做法：`rarity` 不参与拼 HTML 的 class 名 —— 用**白名单映射**
  `RARITY_CLASS = {R:"r-R", SR:"r-SR", SSR:"r-SSR", UR:"r-UR"}`，非白名单值一律降级成 `"R"`。
- `S.options` 里的店名、`history` 里的名字继续用 `esc()`，不要改这条已有防护。

### 中等

**M1. 导入的 pool/results 含已不在 options 的店 → 抽出「幽灵店」**

现状：导入的 pool 里若有已删除的店名，它拿到 999² 的极高权重，几乎必被抽中，
菜单里出现一台用户看不见、也删不掉的店。

改法：`importObj()` 里把 `pool` 和 `results` 的店名**过滤为 `options` 的子集**，
被过滤掉的计数并入 S2 的「丢弃 N 条无效记录」提示里。

**M2. 「待抽 · 会重复」预告用下标比较，与实际重复位置可能不一致**

现状：`willDup = i >= S.options.length` 只在「pool 恰是 options 全集」时成立。
一旦 pool 提前耗尽，重复可能出现在任意位置，会出现「标签对、预告错」。

改法：预告改成**基于剩余可选项的真实计算**：
对第 i 个空位，判断「已抽的店 + 剩余 pool 里的店」的去重数量是否 < 总天数。
即：`剩余唯一店数 < 剩余天数` → 预告「待抽 · 会重复」，否则「待抽」。
计算时以 `S.results` 已抽的店名 + `S.pool` 的剩余店名做去重并集。

> **实现补记（验收阶段发现并修正）**：
> 上述「剩余天数 vs 剩余唯一店数」的口径有两个实测问题，均已修正：
> 1. **`S.pool` 在第一次抽签前是空的**（`pickName` 里才初始化），
>    导致开局 `cnt=0` → 5 店排 5 天也误报「会重复」。候选集必须补上「还没进 pool 的 options」。
> 2. **标记位置应落在「注定重复」的那一段**，而不是从某个中点起每天都标。
>    真实规则是：候选池每次抽签移除一家，前 D 次抽签必然给出 D 家**不同**的店
>    （D = 可用店数 = options 与 pool 的并集大小），第 D+1 次起必然重复。
>    因此「注定重复」的格子是**最后 F 个**（F = 天数 − D），判定即 `i >= D`。
>    若已抽出的结果里已经出现过重复（用户中途改过配置等），以实际首次重复的位置为准。
>
> 验收口径：5店大周5天 → 全程不预告；3店大周5天 → **仅**第4、5格标「会重复」；
> 6店小周6天 → 全程不预告。

**M3. 小周第 6 天无条件写死「加餐日」**

现状：条件只有 `weekType==="small" && dayIdx===5`，不看店数。小周 + 店数 ≥6 时第 6 天并不重复，
但揭示卡仍写「· 加餐日」，而复制出的菜单（dup 逻辑）又不写 → 同一周两种说法。

改法：揭示卡的「加餐日」改成与 `renderDays` 完全一致的判定 —— 比较该店名是否在当天之前的结果里出现过。
两边共用**同一个函数**（例如 `isDupDay(i)`），杜绝口径分叉。

**M4. 动画期间可改周类型，导致 results.length > dayCount()**

现状：busy 期间只禁用了三个抽签按钮，周类型/动画/增删店按钮仍可点。
小周抽到第 6 天时切回大周 → `slice` 在 `push` 之前执行 → 之后 push 使 results=6 > dayCount=5，
第 6 条不可见但仍计入统计、复制文本、归档。

改法：

- busy 期间**同时禁用配置区**（增删店按钮、周类型段、动画段、导入导出按钮）。
- `drawDay()` 开头**重新校验** `dayCount()`，若期间周类型变了，按新的天数截断 `S.results` 再继续。
- `renderDays()` 渲染时以 `min(dayCount(), S.results.length)` 为准，并在结果显示上体现被截断的情况。

**M5. 抽签结果在 4~10 秒动画之后才落盘，中途刷新这一抽直接消失**

现状：1243 行已经 `save()` 过一次（animLog/drawSeq 已记这次出场），动画轮换统计被污染，pool 也已被 splice。
刷新后这一抽丢失，但「这个动画出场过」的记录留下了。

改法：调整顺序 ——

1. 算出 `name` / `rar` / `lastDays`（`lastDays` 必须在写入 results **之前**算）。
2. **立刻**把结果 push 进 `S.results` 并 `save()`（此时 `date` 用 `dayIndexDate(dayIdx)`）。
3. 再播动画，动画结束后只做渲染刷新。

这样中途刷新最多是「菜单里已经多了这一抽」，而不是「这一抽凭空消失」。
动画播放期间渲染要保持「未揭晓」的样子（不要提前把结果画到菜单上），
可以在动画开始时先把 results 里的这一条临时标记为 pending，动画结束再落地显示。

**M6. `save()` 在纯渲染路径上被反复调用**

现状：`renderDays()` 里有副作用 `if(full) archive()` → `save()`，而 `renderDays` 每次抽签至少被调 2 次，
每次全量 `JSON.stringify` 整个状态（历史最多 60 周）。

改法：

- 把 `archive()` 从 `renderDays()` 里**挪走**，只在**真正的状态变更点**调用：
  抽签完成（M5 里动画结束的那一刻）、跨周归档（`rollover()`）、手动触发。
- 渲染函数必须是**纯读**，不带写副作用。
- `save()` 可以加一个脏标记，但可选；如果加了，别让 `updatedAt` 参与文件版本比较（见 S1）。

**M7. 导入直接覆盖 localStorage，无备份、无二次确认**

现状：`importObj` 会把 `S.results` 重置为导入文件里的值；文件缺 `results` 时本周已抽的菜单直接被清空；
文件较旧时也会无声回滚历史。

改法：

- 导入前先 `confirm`：「将用文件内容覆盖当前状态（当前 N 家店 / M 周历史），确定继续？」
- 导入前把当前状态**备份**到一个 localStorage 备份 key（例如 `lunch_gacha_v1_backup`），
  导入失败或用户后悔可以恢复。在配置区加一个「↩️ 恢复备份」按钮（没有备份时禁用）。
- 导入成功后提示里说明「原状态已备份，可用『恢复备份』撤销」。

**M8. CSGO 中奖卡的 `.win` 类加上去后再不移除**

现状：`.cg-card.win::after` 是 3.5s 无限旋转的 conic-gradient（`inset:-40%`），
`.csgo-track` 还常年挂着 `will-change:transform,filter` 和 `fill:forwards` 的动画 → 两次抽签之间持续合成耗电。

改法：动画结束时移除 `win` 类，并把 `.csgo-track` 上的 `fill:forwards` 动画 cancel 掉
（`getAnimations().forEach(a => a.cancel())`），同时去掉 `will-change` 或在结束后清掉。

### 轻微 / 质量

**L1. `emojiOf` 对不在 options 里的名字用 `name.length` 当下标**，数字类型店名 → `NaN` → 界面出现 "undefined"。
→ 加 `Number.isFinite` 兜底，取不到就返回固定 emoji（如 "🍽️"）。

**L2. 死代码**：`archive(force)` 的 `force` 参数从未使用；`RAR[].label` 字段从未被读取。
→ 删掉 `force` 参数（调用处同步改），`label` 字段删掉。

**L3. 选择器过宽，靠赋值顺序侥幸没出事**
第一段 `document.querySelectorAll(".seg button")` 给所有段按钮绑了读 `data-week` 的处理器，
第二段再给 `[data-anim]` 覆盖 onclick。当前靠「onclick 是单值属性」侥幸不出事，改成 addEventListener 就会立刻炸。
→ 两处都改成精确选择器 `.seg button[data-week]` / `.seg button[data-anim]`。

**L4. `tickParts` 的 rAF 永不停**，空闲时也每帧 clearRect 整屏 canvas（dpr 最高 2）→ 手机常驻耗电。
→ 无粒子时**不安排下一帧**（或降到 ~20fps）；有新粒子时再唤醒。粒子有上限（如 400）防止低端机掉帧。

**L5. 三个 460~520px 圆用 `filter:blur(90px)` 且同时跑 transform 动画** → 每帧重做大半径模糊，移动端 GPU 大头。
→ 改成静态 `radial-gradient` 表现同样的柔和光晕，去掉 `filter:blur`。

**L6. `localStorage` 不可用（隐私模式/配额满）时 `save()` 静默吞异常**，而界面仍宣称「自动保存」→ 用户以为存上了其实每次刷新都丢。
→ 启动时**探测一次**写入能力（写一个测试 key 再删掉），失败就在 `#storeMode` 处明确写
「⚠️ 当前浏览器无法保存（隐私模式或空间已满），本次抽签结果刷新后会丢失」。

**L7. 无障碍**
- `.chip .x` 是 `span` + `onclick` → 不可键盘聚焦、屏幕阅读器读不出是按钮。
  → 改成 `<button type="button">`，补 `aria-label="删除 <店名>"`。
- 揭示卡无 `aria-live`、不可 Esc 关闭。
  → `#reveal` 加 `role="dialog"` + `aria-modal="true"` + `aria-label`；揭示结果区域加 `aria-live="polite"`；
    Esc 关闭揭示层（关闭即视为「已揭晓」，结果仍保留在菜单里）。
- 全站无 `prefers-reduced-motion`，却跑着十几个无限动画 + JS 转盘 + CSGO 滚动。
  → 加 `@media (prefers-reduced-motion: reduce)`：关掉 `gridmove`/orb 漂浮/rings/`slidehue`/`urbd`/`sweep`/`beams`/`spin` 等无限动画，
    并让 JS 在该模式下**大幅缩短或跳过**抽签动画（直接揭晓结果）。
    注意：reduced-motion 只影响**装饰性动画**，不能影响抽签逻辑和结果。

### 优化建议（可选但推荐做）

**O1. `pickAnim` 的 `w = g*g` 让「随机」几乎退化为固定交替**（间隔 1 vs 2 时另一个动画占 80%，
间隔 3 时 90%），且 gap 被 cap 到 6 后权重饱和 → 「随机」名不副实。
→ 改成线性权重 `w = 1 + g`（或 `w = g`），保持「越久没出场越容易出」的意图，
但让两种动画的出现概率更均衡。**改了要在 `#animStat` 的说明文案里如实描述新口径。**

**O2. `pickName` 的平方权重跨度 1:3600**，「从没吃过的 999²=998001」对「60 天没吃的 3600」是 277 倍，
实际效果是「只要还有没吃过的就必选它」，档位之间几乎没有梯度。
→ 权重改成 `1 + Math.min(d, 60)`（从没吃过给一个明确的封顶值，如 61），
保留「越久没吃越优先」但让梯度可感。**改了要更新界面上的说明文案。**

**O3. `rollover()` 只在启动/导入时调用**：页面跨过周一不刷新，仍往旧 `weekStart` 写，
`archive()` 会覆盖上周那条历史。
→ 每次抽签前也做一次**轻量周次比较**（比字符串，代价极低）。

**O4. 默认店名同时写在 `def.options`、`EMOJI_MAP`、`data.json` 三处**，开源后改默认店名要同步改三个文件。
→ `EMOJI_MAP` 里**只保留**该店名的通用映射，其余按 index 取 `EMOJI`；
让 `def.options` 与 `data.json` 的默认值保持一致即可（数据文件由上级 Agent 改）。

**O5. 导出文件名固定 `data.json`**，连续导出会得到 `data.json (1).json`；用户也容易误以为会覆盖仓库里那份。
→ 文件名带日期，如 `lunch-gacha-data-YYYY-MM-DD.json`；
导出后提示里说明「导出物需要手动拷回项目目录才会被自动加载」。

**O6. `data.json` 里的 `updatedAt` 语义混乱**（既像文件版本又像时间戳）。
→ 按 S1 引入 `version` 后，`updatedAt` 只保留为「本地最后修改时间」的辅助信息，
在导出文件里可以带一个人类可读的时间戳字段，但**不要**用它做大小比较。

## 四、验收标准

改完后必须**实际跑过**下面这些，并如实报告结果：

1. **双模式冒烟**（Playwright，Python 3.11 已装、chromium 已有）：
   - `file://` 直接打开 `index.html` → 页面正常渲染。
   - `http.server` 起服务 → 页面正常渲染，且**能自动载入**同目录 `data.json`（版本机制生效）。
   - 两种模式都必须**零 console error**、零未捕获异常。
2. **脏数据不崩**：构造 `data.json`（history 缺 `items`、results 的 `rarity` 是恶意字符串、
   pool 含已删除店名），导入后页面**不崩溃**，并且提示里出现「丢弃了 N 条无效记录」；
   恶意 `rarity` **不得**被当作 HTML 执行（断言无新增元素/无弹窗）。
3. **异常不卡死**：模拟一次抽签内部抛错（例如临时注入一个会抛错的函数），
   断言三个按钮**最终恢复可用**（`disabled === false`）。
4. **加餐日口径一致**：小周 + 店数 ≥ 6 时，第 6 天的揭示卡**不得**写「加餐日」；
   店数 < 天数时重复的那一天**必须**标「加餐日」，且揭示卡与菜单标签、复制文本**三处一致**。
5. **抽签中途刷新不丢结果**：抽签进行中刷新页面，当次结果仍在菜单里（可能标记为已揭晓）。
6. **回归**：原有功能不破 —— 增删店、大/小周切换、动画三选一、导入导出、复制菜单、
   统计/历史、跨周归档、localStorage 持久化。

## 五、交付说明（必须包含）

执行者交付时，用中文写一段说明，**明确列出**：

- 上面哪几条**已全部改完**（列编号）。
- 哪几条**没做完或部分完成**（列编号 + 原因）。**不允许隐瞒**。
- 验收 6 条里**实际跑过哪几条、结果如何**（跑了就给结论，没跑就明说没跑及原因）。
- 有没有引入新的判断/取舍（尤其是 S1 的版本机制、M2 的预告口径、O1/O2 的权重口径）。
- 修改后 `index.html` 的行数变化。

**不要**自己提交 git、**不要**推送、**不要**部署。上级 Agent 统一验收后处理。
