/* 塔罗牌牌库 —— Rider–Waite 标准体系
 * 大阿卡纳 22 张（含内联 SVG 牌面）+ 小阿卡纳 56 张（花色符号 + 数字生成牌面）
 * 牌意依据：Rider–Waite–Smith《Pictorial Key to the Tarot》通行释义
 * 用法：<script src="tarot-data.js"></script> 后可直接访问 TAROT
 */
var TAROT = {
  major: [
    {
      n: 0, name: "愚者", en: "The Fool", ro: "0",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><circle cx='74' cy='28' r='10'/><path d='M74 11 L74 16 M91 28 L86 28 M57 28 L62 28 M87 15 L83 19 M61 41 L65 37'/><path d='M8 116 L34 98 L56 110 L92 92' stroke='#8fb8ff'/><circle cx='44' cy='60' r='7'/><path d='M44 67 L44 90 M44 74 L29 64 M44 74 L60 66 M44 90 L35 104 M44 90 L54 104'/><path d='M16 106 q7 -9 13 -2 q-6 9 -13 2 z'/></svg>",
      up: "轻装启程、纯真直觉、相信未知的美好",
      down: "轻率冒失、准备不足、逃避责任"
    },
    {
      n: 1, name: "魔术师", en: "The Magician", ro: "I",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M28 56 C36 44 44 44 50 56 C56 68 64 68 72 56 C64 44 56 44 50 56 C44 68 36 68 28 56 Z' stroke='#8fb8ff'/><path d='M75 24 L52 92'/><circle cx='76' cy='21' r='4'/><polygon points='32,110 42,110 37,101'/><rect x='55' y='101' width='12' height='10'/><circle cx='50' cy='122' r='4'/></svg>",
      up: "资源齐备、意志集中、创造性表达与行动力",
      down: "意图不纯、才能浪费、犹豫不决、暗中操纵"
    },
    {
      n: 2, name: "女祭司", en: "The High Priestess", ro: "II",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M50 22 a18 18 0 1 0 0 36 a14 14 0 1 1 0 -36 z' stroke='#8fb8ff'/><rect x='24' y='46' width='9' height='72'/><rect x='67' y='46' width='9' height='72'/><path d='M33 58 L67 58'/><path d='M42 78 q8 -8 16 0 q-8 8 -16 0 z' stroke='#8fb8ff'/></svg>",
      up: "直觉敏锐、潜意识智慧、静待时机与内在答案",
      down: "忽视直觉、真相被掩、内心混乱、表里不一"
    },
    {
      n: 3, name: "皇后", en: "The Empress", ro: "III",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><polygon points='22,60 30,36 40,50 50,28 60,50 70,36 78,60'/><rect x='20' y='60' width='60' height='9'/><polygon points='50,74 61,94 39,94' stroke='#8fb8ff'/><polygon points='39,74 61,74 50,94' stroke='#8fb8ff'/><path d='M18 94 q7 -11 0 -18 M82 94 q-7 -11 0 -18'/></svg>",
      up: "丰饶滋养、母性温柔、感官欢愉与创造力",
      down: "过度依赖、停滞不前、忽视自我、缺乏照料"
    },
    {
      n: 4, name: "教皇", en: "The Hierophant", ro: "IV",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><circle cx='50' cy='28' r='4' stroke='#8fb8ff'/><path d='M30 52 q20 -22 40 0'/><path d='M32 66 q18 -20 36 0'/><path d='M34 80 q16 -18 32 0'/><path d='M50 84 L50 124 M40 96 L60 96'/></svg>",
      up: "传统规范、指引教导、体制认可与信仰依托",
      down: "教条僵化、固执旧规、虚伪说教、反叛体制"
    },
    {
      n: 5, name: "皇帝", en: "The Emperor", ro: "V",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M30 56 q20 -14 40 0 L70 108 L30 108 Z'/><circle cx='50' cy='40' r='7'/><polygon points='41,26 50,14 59,26'/><path d='M50 47 L50 96 M50 58 L36 50 M50 58 L64 50'/><path d='M22 62 q-9 -6 -5 -15 q9 2 7 13'/><path d='M78 62 q9 -6 5 -15 q-9 2 -7 13'/><path d='M74 62 L74 106'/><circle cx='74' cy='58' r='4' fill='#8fb8ff'/></svg>",
      up: "权威秩序、领导统御、稳固结构、责任担当",
      down: "专断固执、控制欲强、僵化保守、滥用权威"
    },
    {
      n: 6, name: "恋人", en: "The Lovers", ro: "VI",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><circle cx='50' cy='24' r='9'/><path d='M50 8 L50 12 M63 24 L59 24 M37 24 L41 24 M59 15 L56 18 M41 33 L44 30'/><path d='M50 38 a9 9 0 1 0 0 18 a7 7 0 1 1 0 -18 z' stroke='#8fb8ff'/><circle cx='32' cy='84' r='11' stroke='#8fb8ff'/><circle cx='68' cy='84' r='11' stroke='#8fb8ff'/><path d='M50 62 L50 118' stroke='#ff9f9f'/></svg>",
      up: "爱情结合、重要抉择、价值观一致、吸引和谐",
      down: "关系失衡、价值冲突、犹豫不决、选择错误"
    },
    {
      n: 7, name: "战车", en: "The Chariot", ro: "VII",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M50 20 L53 31 L64 34 L53 37 L50 48 L47 37 L36 34 L47 31 Z' stroke='#8fb8ff'/><path d='M28 52 L72 52 L72 70 L28 70 Z'/><circle cx='50' cy='92' r='18'/><path d='M50 74 L50 110 M32 92 L68 92 M37 79 L63 105 M63 79 L37 105'/><circle cx='28' cy='112' r='8'/></svg>",
      up: "意志掌控、胜利前进、决心克服阻力与障碍",
      down: "失控莽撞、方向不明、内心冲突、进展停滞"
    },
    {
      n: 8, name: "力量", en: "Strength", ro: "VIII",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M34 30 C40 22 46 22 50 30 C54 38 60 38 66 30 C60 22 54 22 50 30 C46 38 40 38 34 30 Z' stroke='#8fb8ff'/><circle cx='50' cy='78' r='23'/><path d='M50 55 L50 61 M27 78 L33 78 M73 78 L67 78 M34 62 L39 66 M66 94 L61 90 M66 62 L61 66 M34 94 L39 90'/><circle cx='42' cy='74' r='3' fill='#ffd54f'/><circle cx='58' cy='74' r='3' fill='#ffd54f'/><path d='M43 88 q7 6 14 0'/></svg>",
      up: "以柔克刚、自控耐心、温柔勇气与内在力量",
      down: "自我怀疑、气力耗尽、怯懦急躁、内心焦躁"
    },
    {
      n: 9, name: "隐者", en: "The Hermit", ro: "IX",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M50 22 L50 42'/><polygon points='37,42 63,42 59,66 41,66'/><polygon points='50,48 53,55 60,56 54,60 56,66 50,62 44,66 46,60 40,56 47,55' stroke='#8fb8ff'/><path d='M41 66 L31 124 L69 124 L59 66'/></svg>",
      up: "独处内省、寻求真知、提灯指引、沉淀智慧",
      down: "孤立封闭、逃避人群、迷失方向、固执偏见"
    },
    {
      n: 10, name: "命运之轮", en: "Wheel of Fortune", ro: "X",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><circle cx='50' cy='70' r='30'/><circle cx='50' cy='70' r='12'/><path d='M50 40 L50 100 M20 70 L80 70 M29 49 L71 91 M71 49 L29 91'/><circle cx='50' cy='40' r='3' fill='#ffd54f'/><circle cx='80' cy='70' r='3' fill='#ffd54f'/><circle cx='50' cy='100' r='3' fill='#ffd54f'/><circle cx='20' cy='70' r='3' fill='#ffd54f'/></svg>",
      up: "命运转折、时来运转、周期变化、顺势而为",
      down: "时运不济、被动受挫、抗拒变化、错失良机"
    },
    {
      n: 11, name: "正义", en: "Justice", ro: "XI",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><circle cx='50' cy='32' r='5' stroke='#8fb8ff'/><path d='M50 37 L50 116'/><path d='M22 50 L78 50'/><path d='M22 50 L12 78 L32 78 Z'/><path d='M78 50 L68 78 L88 78 Z'/><path d='M34 118 L66 118'/></svg>",
      up: "公平平衡、因果责任、客观裁决、诚实与契约",
      down: "偏颇失衡、推诿逃避、偏见苛责、误判"
    },
    {
      n: 12, name: "吊人", en: "The Hanged Man", ro: "XII",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M26 28 L74 28 M50 28 L50 60'/><circle cx='50' cy='80' r='8'/><circle cx='50' cy='80' r='15' stroke='#8fb8ff'/><path d='M50 88 L50 100 M50 100 L36 118 M50 100 L64 118'/></svg>",
      up: "悬置等待、换个角度、主动牺牲、以退为进",
      down: "无谓拖延、固执己见、白白受苦、僵化停滞"
    },
    {
      n: 13, name: "死神", en: "Death", ro: "XIII",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><circle cx='44' cy='62' r='18'/><rect x='34' y='74' width='20' height='13' rx='5'/><circle cx='38' cy='58' r='4' fill='#101728'/><circle cx='52' cy='58' r='4' fill='#101728'/><path d='M44 70 L44 78'/><path d='M80 30 L80 124'/><path d='M80 32 L95 43 L80 56 Z' stroke='#8fb8ff'/></svg>",
      up: "结束重生、断舍离、旧结构瓦解、新的阶段",
      down: "抗拒改变、拖泥带水、无法放手、延长终结"
    },
    {
      n: 14, name: "节制", en: "Temperance", ro: "XIV",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M24 42 L52 42 C52 57 42 63 38 63 C34 63 24 57 24 42 Z'/><path d='M38 63 L38 73 M30 73 L46 73'/><path d='M52 90 L80 90 C80 105 70 111 66 111 C62 111 52 105 52 90 Z'/><path d='M66 111 L66 119 M58 119 L74 119'/><path d='M40 78 q6 9 14 3 q6 -6 12 -2' stroke='#8fb8ff'/></svg>",
      up: "调和平衡、中庸融合、耐心疗愈、适度节制",
      down: "失衡极端、挥霍无度、缺乏耐性、内部失调"
    },
    {
      n: 15, name: "恶魔", en: "The Devil", ro: "XV",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M50 96 L71.3 33.1 L19.4 62.4 L80.6 62.4 L28.7 33.1 Z' stroke='#ff6b6b'/><circle cx='50' cy='62' r='5' fill='#101728'/><path d='M30 96 q-6 9 0 13 q6 -4 0 -13'/><path d='M70 96 q-6 9 0 13 q6 -4 0 -13'/><path d='M30 109 L26 124 M70 109 L74 124'/></svg>",
      up: "欲望执念、束缚依赖、物欲诱惑、阴影与控制",
      down: "挣脱束缚、看清真相、戒除依赖、重获自由"
    },
    {
      n: 16, name: "高塔", en: "The Tower", ro: "XVI",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><circle cx='50' cy='44' r='3' fill='#ffd54f'/><path d='M34 128 L34 62 L66 62 L66 128 Z'/><path d='M30 62 L30 50 L39 50 L39 57 L46 57 L46 50 L55 50 L55 57 L62 57 L62 50 L71 50 L71 62'/><path d='M64 30 L52 58 L63 58 L46 86' stroke='#8fb8ff'/></svg>",
      up: "崩塌震荡、真相揭露、剧变打击、旧结构瓦解",
      down: "延后崩塌、勉强维持、内心恐慌、旧患残留"
    },
    {
      n: 17, name: "星星", en: "The Star", ro: "XVII",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M50 24 L56 46 L78 40 L60 52 L78 64 L56 58 L50 80 L44 58 L22 64 L40 52 L22 40 L44 46 Z' stroke='#8fb8ff'/><circle cx='26' cy='92' r='2.5' fill='#ffd54f'/><circle cx='74' cy='96' r='2.5' fill='#ffd54f'/><path d='M20 104 q15 -8 30 0 q15 8 30 0'/><path d='M12 118 q19 -8 38 0 q19 8 38 0'/></svg>",
      up: "希望灵感、疗愈平静、信心重燃、温柔指引",
      down: "失去信心、失望幻灭、方向迷失、灵感枯竭"
    },
    {
      n: 18, name: "月亮", en: "The Moon", ro: "XVIII",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M50 20 a16 16 0 1 0 0 32 a12 12 0 1 1 0 -32 z' stroke='#8fb8ff'/><path d='M14 100 L14 64 L27 64 L27 100 Z'/><path d='M18 64 L18 48 L23 48 L23 64'/><path d='M73 100 L73 64 L86 64 L86 100 Z'/><path d='M77 64 L77 48 L82 48 L82 64'/><path d='M8 116 q21 -11 42 0 q21 11 42 0'/><circle cx='50' cy='110' r='3' fill='#ffd54f'/></svg>",
      up: "幻觉迷惑、不安恐惧、潜意识涌动、真假难辨",
      down: "迷雾散去、误解消除、真相浮现、恐惧释放"
    },
    {
      n: 19, name: "太阳", en: "The Sun", ro: "XIX",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><circle cx='50' cy='50' r='20'/><path d='M50 20 L50 26 M50 74 L50 80 M20 50 L26 50 M74 50 L80 50 M28 28 L32 32 M68 68 L72 72 M72 28 L68 32 M32 68 L28 72'/><path d='M12 118 L12 100 L88 100 L88 118 Z'/><path d='M12 100 L12 92 L22 92 L22 98 L32 98 L32 92 L42 92 L42 98 L52 98 L52 92 L62 92 L62 98 L72 98 L72 92 L82 92 L82 100'/></svg>",
      up: "成功喜悦、清晰明朗、活力生命力、坦诚丰足",
      down: "暂时受挫、光辉受阻、热情被压、喜悦延迟"
    },
    {
      n: 20, name: "审判", en: "Judgement", ro: "XX",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><path d='M14 54 L34 44 L34 62 Z' stroke='#8fb8ff'/><path d='M34 44 L34 62'/><path d='M40 34 L64 24 M40 44 L68 44 M40 54 L64 64'/><circle cx='74' cy='22' r='2.5' fill='#ffd54f'/><circle cx='30' cy='76' r='4'/><path d='M30 80 L30 118 M30 88 L21 79 M30 88 L39 79'/><circle cx='52' cy='76' r='4'/><path d='M52 80 L52 118 M52 88 L43 79 M52 88 L61 79'/></svg>",
      up: "觉醒召唤、清算总结、重大决定、宽恕重生",
      down: "犹豫不决、自我批判、逃避召唤、错过时机"
    },
    {
      n: 21, name: "世界", en: "The World", ro: "XXI",
      svg: "<svg viewBox='0 0 100 140' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='5' y='5' width='90' height='130' rx='7' fill='#101728' stroke-opacity='0.25' stroke-width='1'/><ellipse cx='50' cy='70' rx='32' ry='44'/><path d='M18 70 L28 70 M82 70 L72 70'/><circle cx='50' cy='44' r='7'/><path d='M50 51 L50 84 M50 58 L36 50 M50 58 L64 50 M50 84 L40 102 M50 84 L60 102'/><path d='M36 110 q14 -9 28 0'/></svg>",
      up: "圆满完成、成就整合、毕业新阶段、视野广阔",
      down: "收尾未竟、延误悬而未决、目标未达、差一步"
    }
  ],

  suits: [
    {
      key: "wands", name: "权杖", element: "火",
      symbol: "<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M20 36 L20 14'/><path d='M20 22 q-9 -1 -11 -8 q9 0 11 6'/><path d='M20 27 q9 -1 11 -8 q-9 0 -11 6'/><path d='M20 14 q-5 -8 0 -12 q5 4 0 12 z'/></svg>"
    },
    {
      key: "cups", name: "圣杯", element: "水",
      symbol: "<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M10 9 L30 9 C30 21 23 26 20 26 C17 26 10 21 10 9 Z'/><path d='M20 26 L20 33 M13 33 L27 33'/></svg>"
    },
    {
      key: "swords", name: "宝剑", element: "风",
      symbol: "<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M20 4 L20 26'/><path d='M9 26 L31 26'/><path d='M20 26 L20 34'/><circle cx='20' cy='35' r='2'/></svg>"
    },
    {
      key: "pentacles", name: "星币", element: "土",
      symbol: "<svg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#ffd54f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='20' cy='20' r='12'/><path d='M20 9 L26.5 28.9 L9.5 16.6 L30.5 16.6 L13.5 28.9 Z'/></svg>"
    }
  ],

  minor: [
    { suit: "wands", num: 1, name: "权杖一", up: "灵感迸发、新行动契机、热情与冲劲十足", down: "起步受阻、动力不足、方向模糊、计划延迟" },
    { suit: "wands", num: 2, name: "权杖二", up: "规划筹谋、放眼远方、掌控局势、稳步前进", down: "计划受挫、目光短浅、原地打转、畏惧不前" },
    { suit: "wands", num: 3, name: "权杖三", up: "扩展开拓、等待回报、布局已成、远行在即", down: "延迟受限、进展停滞、视野受阻、合作不顺" },
    { suit: "wands", num: 4, name: "权杖四", up: "庆祝安定、归属与和谐、家园圆满、团队凝聚", down: "内部不稳、归属感缺失、庆祝延后、平静被扰" },
    { suit: "wands", num: 5, name: "权杖五", up: "竞争摩擦、多方角力、混乱冲突、挑战重重", down: "回避冲突、化解僵局、暂时停战、内心内耗" },
    { suit: "wands", num: 6, name: "权杖六", up: "凯旋被认可、声望与荣耀、众望所归、胜利归来", down: "骄傲自负、认可落空、炫耀张扬、荣誉延后" },
    { suit: "wands", num: 7, name: "权杖七", up: "坚守立场、占据高地、捍卫信念、防御挑战", down: "疲惫放弃、屈从压力、疲于应对、信念动摇" },
    { suit: "wands", num: 8, name: "权杖八", up: "迅速进展、消息传来、时机成熟、顺畅加速", down: "延误受阻、消息滞后、节奏混乱、拖延迟缓" },
    { suit: "wands", num: 9, name: "权杖九", up: "戒备坚持、最后防线、疲惫仍守、警惕守护", down: "疑神疑鬼、身心俱疲、放弃戒备、防守瓦解" },
    { suit: "wands", num: 10, name: "权杖十", up: "负担沉重、任重道远、责任在肩、临近终点", down: "卸下重担、学会放下、分摊压力、逃避责任" },
    { suit: "wands", num: 11, name: "权杖侍从", up: "热好奇望、跃跃欲试、带来消息、年轻冲劲", down: "急躁毛躁、方向不定、好高骛远、缺乏耐性" },
    { suit: "wands", num: 12, name: "权杖骑士", up: "果敢开拓、行动迅速、热情奔放、敢闯敢拼", down: "冲动莽撞、方向失误、耗尽热情、急于求成" },
    { suit: "wands", num: 13, name: "权杖皇后", up: "自信热情、魅力感染、独立坚强、领导风范", down: "嫉妒不安、强势逼人、缺乏自信、内在焦虑" },
    { suit: "wands", num: 14, name: "权杖国王", up: "领导魄力、愿景决断、创业开创、影响他人", down: "专断独行、急躁暴躁、固执强硬、缺乏耐心" },

    { suit: "cups", num: 1, name: "圣杯一", up: "情感涌现、爱的触动、丰盛之杯、喜悦盈满", down: "情感封闭、空虚失落、浪费心意、感情受阻" },
    { suit: "cups", num: 2, name: "圣杯二", up: "双向联结、结盟伙伴、彼此吸引、平等对话", down: "关系失衡、误解隔阂、联结破裂、渐行渐远" },
    { suit: "cups", num: 3, name: "圣杯三", up: "友谊庆祝、分享合作、社团支持、喜悦连结", down: "社交耗损、人云亦云、群体压力、过度投入" },
    { suit: "cups", num: 4, name: "圣杯四", up: "倦怠冷漠、错失机会、内省休整、不满足", down: "走出低潮、接受机会、重拾热情、改变心境" },
    { suit: "cups", num: 5, name: "圣杯五", up: "失落哀悼、执着已失、遗憾转折、悲伤需被看见", down: "接受损失、走出悲伤、重新振作、翻过旧页" },
    { suit: "cups", num: 6, name: "圣杯六", up: "回忆温情、童年旧梦、纯真善意、旧日重温", down: "活在过去、无法放下、沉溺回忆、停滞不前" },
    { suit: "cups", num: 7, name: "圣杯七", up: "幻想愿景、诱惑机会、目标过多、选择纷呈", down: "目标不实、选择困难、幻灭破灭、看清取舍" },
    { suit: "cups", num: 8, name: "圣杯八", up: "主动离开、舍离远行、寻找意义、情感倦怠", down: "犹豫不决、害怕离开、原地打转、难以取舍" },
    { suit: "cups", num: 9, name: "圣杯九", up: "满足幸福、愿望达成、自得其乐、享受成果", down: "表面满足、内在空虚、愿望未竟、幸福感不足" },
    { suit: "cups", num: 10, name: "圣杯十", up: "情感圆满、家庭和睦、长久满足、幸福和谐", down: "关系失衡、貌合神离、理想破裂、情感不满足" },
    { suit: "cups", num: 11, name: "圣杯侍从", up: "敏感想象、创意萌发、纯真心意、灵感讯息", down: "情绪化、过度敏感、想象失焦、表现不稳" },
    { suit: "cups", num: 12, name: "圣杯骑士", up: "浪漫追求、情感表达、理想主义、温柔邀请", down: "言过其实、优柔寡断、理想落空、情绪不稳" },
    { suit: "cups", num: 13, name: "圣杯皇后", up: "共情温柔、情感丰盈、成熟之爱、直觉敏锐", down: "情绪淹没、过度付出、情绪失衡、忽略自我" },
    { suit: "cups", num: 14, name: "圣杯国王", up: "情绪成熟、包容稳定、善于共情、外柔内定", down: "压抑情绪、暗藏操控、表面平静、内在翻涌" },

    { suit: "swords", num: 1, name: "宝剑一", up: "思维清明、真相突破、认知锐利、新的想法", down: "思路混乱、真相扭曲、言语伤人、判断失准" },
    { suit: "swords", num: 2, name: "宝剑二", up: "僵持平衡、暂时回避、犹豫不决、维持和平", down: "打破僵局、被迫面对、信息缺失、难以抉择" },
    { suit: "swords", num: 3, name: "宝剑三", up: "心痛真相、伤害分离、悲伤难当、真相的痛", down: "释怀疗愈、走出伤痛、拒绝面对、伤口未愈" },
    { suit: "swords", num: 4, name: "宝剑四", up: "休息恢复、暂停休整、闭关蓄力、身心静养", down: "倦怠拖延、强行复出、被迫行动、停滞太久" },
    { suit: "swords", num: 5, name: "宝剑五", up: "争胜摩擦、自私冲突、惨胜代价、彼此伤害", down: "和解退让、放下胜负、悔恨内疚、彼此释然" },
    { suit: "swords", num: 6, name: "宝剑六", up: "过渡前行、离开困境、向平静移动、疗愈之旅", down: "背负旧题、滞留原地、延误出发、情绪未平" },
    { suit: "swords", num: 7, name: "宝剑七", up: "策略隐瞒、独自行动、投机取巧、不动声色", down: "真相暴露、良心不安、计谋败露、失去掌控" },
    { suit: "swords", num: 8, name: "宝剑八", up: "束缚受限、受害心态、无法挣脱、内心受限", down: "挣脱束缚、发现新路、走出困境、看清真相" },
    { suit: "swords", num: 9, name: "宝剑九", up: "焦虑噩梦、忧思过重、内心煎熬、深夜不安", down: "走出恐惧、寻求帮助、逐渐平静、缓解焦虑" },
    { suit: "swords", num: 10, name: "宝剑十", up: "彻底终结、崩溃到底、触底反弹、彻底失败", down: "触底复苏、慢慢恢复、重建新局、劫后余生" },
    { suit: "swords", num: 11, name: "宝剑侍从", up: "好奇观察、警觉研究、探查消息、审慎求知", down: "草率多疑、话多吹嘘、功课未做、消息有误" },
    { suit: "swords", num: 12, name: "宝剑骑士", up: "果断行动、直率冲锋、言语犀利、急切求成", down: "莽撞失控、言语伤人、方向失准、鲁莽冲动" },
    { suit: "swords", num: 13, name: "宝剑皇后", up: "理性清明、独立权威、经验智慧、界限分明", down: "冷酷苛责、偏见成见、滥用理性、失去温度" },
    { suit: "swords", num: 14, name: "宝剑国王", up: "理性权威、公平判断、逻辑原则、客观决策", down: "专断冷酷、滥用逻辑、偏执说教、操纵他人" },

    { suit: "pentacles", num: 1, name: "星币一", up: "实在机会、新起点开端、务实起步、丰盛可能", down: "机会流失、忽视良机、虚幻不实、起步不顺" },
    { suit: "pentacles", num: 2, name: "星币二", up: "平衡兼顾、多线周转、灵活调度、收支平衡", down: "顾此失彼、失衡失调、余裕不足、入不敷出" },
    { suit: "pentacles", num: 3, name: "星币三", up: "协作技艺、团队合作、专业打磨、共同目标", down: "配合不良、技艺不足、缺乏合作、标准不一" },
    { suit: "pentacles", num: 4, name: "星币四", up: "掌控稳定、储蓄安全、抓紧不放、稳固根基", down: "松手给予、过度吝啬、僵化守财、突破束缚" },
    { suit: "pentacles", num: 5, name: "星币五", up: "匮乏艰难、被拒门外、艰难时期、自力更生", down: "转机出现、走出困境、援助到来、渡过难关" },
    { suit: "pentacles", num: 6, name: "星币六", up: "慷慨施予、接受与给予、平衡施受、善意分享", down: "施受不均、附带条件、彼此依附、债务纠葛" },
    { suit: "pentacles", num: 7, name: "星币七", up: "耐心评估、等待回报、复盘坚持、长远考量", down: "投入无果、急于收成、回报不足、放弃坚持" },
    { suit: "pentacles", num: 8, name: "星币八", up: "勤练专注、技艺精进、踏实努力、反复磨炼", down: "敷衍重复、缺乏专注、完美拖延、原地打转" },
    { suit: "pentacles", num: 9, name: "星币九", up: "自足丰盛、优雅独立、精致享受、成果与保障", down: "虚荣不安、依赖外表、缺少自我价值、无法放松" },
    { suit: "pentacles", num: 10, name: "星币十", up: "长久财富、家庭传承、稳定长久、圆满富足", down: "财务纠纷、短暂成功、家族矛盾、根基不稳" },
    { suit: "pentacles", num: 11, name: "星币侍从", up: "踏实学习、务实起步、认真规划、好消息传来", down: "拖延懒散、缺乏规划、眼高手低、纸上谈兵" },
    { suit: "pentacles", num: 12, name: "星币骑士", up: "稳健可靠、踏实勤勉、缓慢坚定、实际执行", down: "固执迟缓、停滞不前、过度保守、倦怠懒散" },
    { suit: "pentacles", num: 13, name: "星币皇后", up: "务实丰饶、照顾经营、舒适环境、家业兴旺", down: "过度操劳、忽略自己、焦虑物质、照料失衡" },
    { suit: "pentacles", num: 14, name: "星币国王", up: "财富成就、稳健经营、务实领导、物质成功", down: "固执贪求、唯利是图、过度保守、事业僵化" }
  ]
};

if (typeof window !== "undefined") { window.TAROT = TAROT; }
