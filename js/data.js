// 题目（选项已随机打乱 + id 重新编号）
const questions = [
  {
    id: 1,
    title: "朋友约你去机厅打maimai，你会？",
    options: [
      { id: 1, text: "再拉一车面包人前往机厅", scores: { brave: 1, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 2, text: "立刻出发，说走就走", scores: { brave: 2, strong: -1, sharp: 0, easy: 0 }, selected: false },
      { id: 3, text: "看看有没有心情顺路去了", scores: { brave: 0, strong: 0, sharp: -2, easy: 1 }, selected: false },
      { id: 4, text: "怎么能让你小子先打，我要先过去爽爽霸机~", scores: { brave: -1, strong: 2, sharp: 0, easy: 0 }, selected: false }
    ]
  },
  {
    id: 2,
    title: "推一直鸟/鸟加不掉的高难曲，你会？",
    options: [
      { id: 1, text: "随缘，下次再来玩哟~", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 2, text: "不行，我还要再开1pc还要继续推！", scores: { brave: 2, strong: -2, sharp: 0, easy: 0 }, selected: false },
      { id: 3, text: "不打了，拉黑名单，这粪谱爱谁打谁打", scores: { brave: 0, strong: 1, sharp: 2, easy: 0 }, selected: false },
      { id: 4, text: "还是先看看B站上的谱面确认，把不会的地方熟悉一下吧", scores: { brave: 0, strong: 2, sharp: 1, easy: 0 }, selected: false }
    ]
  },
  {
    id: 3,
    title: "成功把一个高难曲推上了分，你更在意？",
    options: [
      { id: 1, text: "我感觉我的底力增强，我强得可怕", scores: { brave: 2, strong: 0, sharp: 0, easy: 0 }, selected: false },
      { id: 2, text: "我去我得赶紧发给我朋友看看让他知道", scores: { brave: 0, strong: 1, sharp: 0, easy: 1 }, selected: false },
      { id: 3, text: "玩得开心就好，不看分数", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 4, text: "我刚才好像有地方没打好", scores: { brave: 0, strong: 2, sharp: 1, easy: 0 }, selected: false }
    ]
  },
  { 
    id: 4,
    title: "你打maimai更偏向哪种节奏？",
    options: [
      { id: 1, text: "就是要不断往高难曲上推，累点锻炼自己", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 }, selected: false },
      { id: 2, text: "拔大蒜，爽！提亚马特，爽！", scores: { brave: 2, strong: 0, sharp: 1, easy: 0 }, selected: false },
      { id: 3, text: "感觉还是没什么起伏，键型稳定的歌好玩一点", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 }, selected: false },
      { id: 4, text: "随便打打啦，整点活也好", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false }
    ]
  },
  {
    id: 5,
    title: "新版本更新，你对新谱面的态度是？",
    options: [
      { id: 1, text: "我趣！我明天得赶紧堵门去玩", scores: { brave: 2, strong: 0, sharp: 0, easy: 0 }, selected: false },
      { id: 2, text: "还是老歌好听好玩", scores: { brave: 0, strong: 0, sharp: -1, easy: 1 }, selected: false },
      { id: 3, text: "先看看谱面确认吧，等到自己练熟了再上机打", scores: { brave: 0, strong: 2, sharp: 2, easy: 0 }, selected: false },
      { id: 4, text: "对面选什么我打什么，自己也只是随歌不关注这个", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false }
    ]
  },
  {
    id: 6,
    title: "有人在旁边看你打歌，你会？",
    options: [
      { id: 1, text: "我草怎么有人在看我，求你了别看了别看了~", scores: { brave: -1, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 2, text: "关注，但不会太影响我发挥", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 }, selected: false },
      { id: 3, text: "无所谓，自己打歌舒服最重要", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 4, text: "我得打好一点让别人觉得我太帅了", scores: { brave: 0, strong: 1, sharp: 2, easy: 0 }, selected: false }
    ]
  },
  {
    id: 7,
    title: "打一首歌出现连续失误、状态很差时，你会？",
    options: [
      { id: 1, text: "开始整活，我要成为机厅焦点！（", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 2, text: "立刻调整，强行找回状态", scores: { brave: 2, strong: 0, sharp: 1, easy: 0 }, selected: false },
      { id: 3, text: "坚持尽力打完，不skip", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 }, selected: false },
      { id: 4, text: "算了放松打就算这首歌休息了", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false }
    ]
  },
  {
    id: 8,
    title: "你在选曲时优先看什么？",
    options: [
      { id: 1, text: "来选宴谱，八个人开一台机（", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 2, text: "高难鬼歌鬼谱，能秀操作能整活", scores: { brave: 2, strong: 0, sharp: 1, easy: 0 }, selected: false },
      { id: 3, text: "曲风好听，玩着舒服", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 4, text: "谱面稳，适合练底力", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 }, selected: false }
    ]
  },
  {
    id: 9,
    title: "拼机时，你更在意？",
    options: [
      { id: 1, text: "我高低得给他整点活来", scores: { brave: 1, strong: 0, sharp: 0, easy: 0 }, selected: false },
      { id: 2, text: "我得打好一点别被人挂了", scores: { brave: 0, strong: 1, sharp: 1, easy: 0 }, selected: false },
      { id: 3, text: "没什么在意的", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 4, text: "随便选自己想打的歌管我拼机的人是谁", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false }
    ]
  },
  {
    id: 10,
    title: "当你推上了你想要达到的rating后，你会？",
    options: [
      { id: 1, text: "管他什么先拍照发空间然后立马写个获奖感言（", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 2, text: "立刻挑战更高难度，继续提高自己，继续推分", scores: { brave: 2, strong: 0, sharp: 2, easy: 0 }, selected: false },
      { id: 3, text: "心满意足，开始打一些小歌轻松的歌下埋", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 4, text: "保持自己的舒适圈，打自己能打的歌慢慢来", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 }, selected: false }
    ]
  },
  {
    id: 11,
    title: "遇到完全陌生奇怪的谱面配置，你会？",
    options: [
      { id: 1, text: "跟着之前打正常歌熟悉的节奏走或干脆不打了", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 2, text: "直接打，临场应变，上机适应是关键", scores: { brave: 2, strong: 0, sharp: 0, easy: 0 }, selected: false },
      { id: 3, text: "先上B站看屏幕确认再上手", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 }, selected: false },
      { id: 4, text: "随便打打，重在打歌体验", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false }
    ]
  },
  {
    id: 12,
    title: "你认为音游实力最关键是？",
    options: [
      { id: 1, text: "能和别人交流，分享经验", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 2, text: "反应快、敢打敢冲高难", scores: { brave: 2, strong: 0, sharp: 2, easy: 0 }, selected: false },
      { id: 3, text: "稳定持久、不失误", scores: { brave: 0, strong: 2, sharp: 1, easy: 0 }, selected: false },
      { id: 4, text: "玩得开心、放松就好", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false }
    ]
  },
  {
    id: 13,
    title: "长时间打maimai，你更容易？",
    options: [
      { id: 1, text: "容易分心，注意力下降", scores: { brave: 1, strong: -2, sharp: 0, easy: 0 }, selected: false },
      { id: 2, text: "越打越兴奋，状态越高", scores: { brave: 2, strong: 0, sharp: 1, easy: 0 }, selected: false },
      { id: 3, text: "始终平稳，耐力很强", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 }, selected: false },
      { id: 4, text: "逐渐放松，开始划水", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false }
    ]
  },
  {
    id: 14,
    title: "机厅人多拥挤时，你打歌会？",
    options: [
      { id: 1, text: "害害害！开始整活！", scores: { brave: 2, strong: 0, sharp: 1, easy: 0 }, selected: false },
      { id: 2, text: "专注自己的谱面，别人与我无关", scores: { brave: 0, strong: 0, sharp: 2, easy: 0 }, selected: false },
      { id: 3, text: "人多起来了，那我选歌得收敛一点了", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 }, selected: false },
      { id: 4, text: "放轻松，怎么舒服怎么来", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false }
    ]
  },
  {
    id: 15,
    title: "你理想中的maimai玩家标签是？",
    options: [
      { id: 1, text: "擅长配合、双人默契拉满", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 2, text: "手速快、果断凌厉的实力派", scores: { brave: 2, strong: 0, sharp: 2, easy: 0 }, selected: false },
      { id: 3, text: "佛系休闲、快乐至上的养生玩家", scores: { brave: 0, strong: 0, sharp: 0, easy: 1 }, selected: false },
      { id: 4, text: "沉稳稳定、耐力惊人的稳扎派", scores: { brave: 0, strong: 2, sharp: 0, easy: 0 }, selected: false }
    ]
  }
]

// 角色（完全不变）
const personalityList = [
  {
    name: "TAP",
    desc: "干脆利落、一击即中，从不拖泥带水的行动派",
    explain: "你就像 TAP 只需在落在判定线上瞬间拍下，完成即收，不拖沓、不犹豫，做事直白爽快，专注当下的事物。",
    img: "images/tap.png",
    weight: [1.6, 1.1, 0.9, 0.7],
    score: 0
  },
  {
    name: "HOLD",
    desc: "沉稳执着、有始有终，耐心拉满的坚定守护者",
    explain: "如同 HOLD 需要从头一直按下去，你一旦开始就会坚持到底，沉稳可靠，就像HOLE一样，直到底，不半途而手、不半途而废。",
    img: "images/hold.png",
    weight: [0.5, 1.7, 0.8, 1.3],
    score: 0
  },
  {
    name: "SLIDE",
    desc: "灵动帅气、开局亮眼，偶尔虎头蛇尾的机灵鬼",
    explain: "像 SLIDE 星星一样，开头帅气精准，但很容易留尾，代表你灵气足、反应快，有强大的判断力，能及时调整策略。但耐心与持久力稍弱，有的时候容易半路分心。",
    img: "images/slide.png",
    weight: [1.9, 0.6, 1.1, 0.6],
    score: 0
  },
  {
    name: "TOUCH",
    desc: "佛系松弛、随性自在，毫无压力的养生玩家",
    explain: "对应 TOUCH 判定极松，随便乱糊都能判定，你做事心态随和、不较真、不紧绷，怎么舒服怎么来。是一位非常轻松的人，不会因为任何事情而压力大。",
    img: "images/touch.png",
    weight: [0.7, 0.7, 1.0, 1.8],
    score: 0
  },
  {
    name: "TOUCH HOLD",
    desc: "低调蓄力、默默深耕，厚积薄发一鸣惊人的强者",
    explain: "旧版只在判定C区中心沉默，新版跳出C区判定全屏突然爆发，如同你长期低调蓄力，不声不响，却在关键时刻惊艳所有人。",
    img: "images/touchhold.png",
    weight: [0.9, 1.8, 1.0, 0.6],
    score: 0
  },
  {
    name: "BREAK",
    desc: "极致严苛、追求完美，自带气场的核心王牌",
    explain: "如同 BREAK 判定最严、分数最高，你对自己要求极高，追求完美，胜负心强，天生就是焦点与核心。",
    img: "images/break.png",
    weight: [1.5, 1.0, 0.8, 0.3],
    score: 0
  },
  {
    name: "EX-NOTE",
    desc: "温和治愈、包容大度，轻松化解紧张的小太阳",
    explain: "EX-NOTE 因为包了保护套而变得判定宽松、容错极高，就像你包容自己与他人的失误，心态轻松，能治愈身边所有人。",
    img: "images/ex.png",
    weight: [0.7, 1.1, 0.5, 1.7],
    score: 0
  },
  {
    name: "EACH",
    desc: "重视默契、偏爱协同，离不开同伴的最佳搭档",
    explain: "EACH 必须双押同步才能成功，你重视配合、默契与陪伴，喜欢并肩前行，喜欢社交，经常跟机厅的同好打成一片。",
    img: "images/each.png",
    weight: [1.1, 1.1, 0.7, 1.6],
    score: 0
  },
  {
    name: "SHINETOUCH",
    desc: "灵动亮眼、自带高光，不刻意也能温柔吸睛",
    explain: "普通操作却能绽放彩虹特效，就像你不必强求也能闪闪发光，轻松自在，安静却有存在感。",
    img: "images/shinetouch.png",
    weight: [1.6, 0.8, 1.0, 1.0],
    score: 0
  }
]