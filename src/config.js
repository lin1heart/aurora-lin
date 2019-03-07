export default {
  /**
   * ========================================
   *               站点功能【必需】
   * ========================================
   **/

  /**
   * 站点标题
   */
  title: '一期一会',
  subtitle: '人生天地间 忽如远行客',

  /**
   * Github Issues 配置【文章、说说、书单、友链】
   * Github Issues api: https://developer.github.com/v3/issues/
   **/
  // 博客仓库
  blog: 'https://api.github.com/repos/lin1heart/Blog',
  // token 从中间任意位置拆开成两部分，避免 github 代码检测失效
  token: ['f43a476fa8383cc7f29e', 'a19f1303d1f5fd8a2a93'],
  // 发布者
  creator: 'lin1heart',

  /**
   * leancloud 配置 【文章浏览次数】
   */
  leancloud: {
    appId: 'egCAnkINRhwz0i4v7fq0kLKd-gzGzoHsz',
    appKey: 'KtvWM29N2H7cP2k2gxH88Ts2'
  },

  /**
   * Gittalk 配置【评论功能】，详细文档参见：https://github.com/gitalk/gitalk
   */
  gitalk: {
    clientID: '08e0721f11f9495303d3',
    clientSecret: 'e119264206185df60120cc767d10c8e654228337',
    repo: 'comment',
    owner: 'lin1heart',
    admin: ['lin1heart'],
    distractionFreeMode: false // 是否开始无干扰模式【背景遮罩】
  },

  /**
   * ========================================
   *                页面设置
   * ========================================
   */

  /**
   * 归档页面
   */
  archiveOpts: {
    enableGitalk: false,
    qoute: '文章千古事，得失寸心知'
  },

  /**
   * 分类页面【与 Github Issues 的 Milestone 对应】
   */
  categoryOpts: {
    enableGitalk: false,
    qoute: '行云流水，落笔生花'
  },

  /**
   * 标签配置
   */
  tagOpts: {
    enableGitalk: false,
    qoute: '列卒周匝，星罗云布'
  },

  /**
   * 心情页面
   */
  moodOpts: {
    enableGitalk: true,
    qoute: '欲言又止，止言又欲'
  },

  /**
   * 书单页面
   */
  bookOpts: {
    enableGitalk: true,
    qoute: '吾生也有涯，而知也无涯'
  },

  /**
   * 友链页面
   */
  friendOpts: {
    enableGitalk: true,
    qoute: '三人行，必有我师'
  },

  /**
   * 关于页面
   */
  aboutOpts: {
    enableGitalk: true,
    qoute: '一生一期,一期一会',
    avatar: 'https://s2.ax1x.com/2019/03/07/kxqvOs.png',
    college: 'Software Engineering',
    // 联系方式
    contact: [
      {
        icon: 'https://s2.ax1x.com/2019/03/07/kxqjyj.png',
        link: 'mailto:lin1heart@foxmail.com'
      },
      {
        icon: 'https://s2.ax1x.com/2019/03/07/kxqbY8.png',
        link: 'https://space.bilibili.com/94774466'
      },
      {
        icon: 'https://s2.ax1x.com/2019/03/07/kxqqfS.png',
        link: 'https://github.com/lin1heart'
      },
      {
        icon: 'https://s2.ax1x.com/2019/03/07/kxqOSg.png',
        link: 'https://music.163.com/#/user/home?id=495970988'
      }
    ]
  },

  /**
   * ========================================
   *                主题自定义
   * ========================================
   */

  /**
   * 加载动画
   */
  loadingImg: 'https://s2.ax1x.com/2019/03/08/kxX0yQ.gif',

  /**
   * 文章默认图
   */
  defaultCover: 'https://s2.ax1x.com/2019/03/08/kxXBLj.jpg',

  /**
   * 主题配色，目前主要用于文章、说说、关于等卡片配色，以后可能会有其他用途
   * 推荐一个好看的取色站，日本の伝統色：http://nipponcolors.com/
   */
  themeColors: [
    '#B28FCE', // 薄
    '#86C166', // 苗
    '#F9BF45', // 玉子
    '#FAD689', // 浅黄
    '#F596AA', // 桃
    '#E79460', // 洗柿
    '#2EA9DF', // 露草
    '#FFBA84', // 洒落柿
    '#7DB9DE', // 勿忘草
    '#FF99FF'
  ],

  /**
   * 音乐播放器,
   */
  APlayer: [
    {
      name: 'うたかたの风と蝉时雨',
      artist: 'Little Planet',
      url: 'http://music.163.com/#/m/song?id=33497436',
      cover: 'https://i.loli.net/2018/12/09/5c0cc3ca1081b.jpg'
    },
    {
      name: '春の凑に',
      artist: 'TUMENECO',
      url: 'https://files.catbox.moe/3o8ivq.mp3',
      cover: 'https://i.loli.net/2018/12/11/5c0f196d01a3a.jpg'
    },
    {
      name: '夏阳炎',
      artist: '天威梦方',
      url: 'https://files.catbox.moe/dy5d71.mp3',
      cover: 'https://i.loli.net/2018/12/09/5c0cc3cee372a.jpg'
    },
    {
      name: '秋风のとおり道',
      artist: '风神华伝',
      url: 'https://files.catbox.moe/e1t7zh.mp3',
      cover: 'https://i.loli.net/2018/12/09/5c0cc3d13844a.jpg'
    },
    {
      name: '冬のわすれもの',
      artist: 'ハルノカゼ',
      url: 'https://files.catbox.moe/2whj5x.mp3',
      cover: 'https://i.loli.net/2018/12/09/5c0cc3d36349c.jpg'
    }
  ]
}
