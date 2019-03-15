export default {
  /**
   * ========================================
   *               站点功能【必需】
   * ========================================
   **/

  /**
   * 站点标题
   */
  title: 'lin1heart',
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
    qoute: '随心所欲，畅所欲言'
  },

  /**
   * 书单页面
   */
  bookOpts: {
    enableGitalk: true,
    qoute: '学海无涯'
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
      name: '生如逆旅',
      artist: '圈9',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/%E5%9C%889%20-%20%E7%94%9F%E5%A6%82%E9%80%86%E6%97%85%EF%BC%88Cover%20%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%88%EF%BC%89.mp3',
      cover: 'https://s2.ax1x.com/2019/03/15/AVm1zj.jpg'
    },
    {
      name: '中华粘土娘',
      artist: '三无MarBlue',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/%E4%B8%89%E6%97%A0MarBlue%20-%20%E4%B8%AD%E5%8D%8E%E7%B2%98%E5%9C%9F%E5%A8%98.mp3',
      cover: 'https://s2.ax1x.com/2019/03/15/AVmlWQ.jpg'
    },
    {
      name: '牵丝戏',
      artist: '圈9',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/%E5%9C%889%20-%20%E7%89%B5%E4%B8%9D%E6%88%8F.mp3',
      cover: 'https://s2.ax1x.com/2019/03/15/AVmuo8.jpg'
    },
    {
      name: '忽如远行客',
      artist: '云の泣',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/%E4%BA%91%E3%81%AE%E6%B3%A3%20-%20%E5%BF%BD%E5%A6%82%E8%BF%9C%E8%A1%8C%E5%AE%A2.mp3',
      cover: 'https://s2.ax1x.com/2019/03/15/AVmFRH.jpg'
    },
    {
      name: '一期一会《未闻花名》（Cover 茅野愛衣,戸松遥,早見沙織）',
      artist: '周深',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/%E5%91%A8%E6%B7%B1%20-%20%E4%B8%80%E6%9C%9F%E4%B8%80%E4%BC%9A%E3%80%8A%E6%9C%AA%E9%97%BB%E8%8A%B1%E5%90%8D%E3%80%8B%EF%BC%88Cover%20%E8%8C%85%E9%87%8E%E6%84%9B%E8%A1%A3%2C%E6%88%B8%E6%9D%BE%E9%81%A5%2C%E6%97%A9%E8%A6%8B%E6%B2%99%E7%B9%94%EF%BC%89.mp3',
      cover: 'https://s2.ax1x.com/2019/03/15/AVmZLt.jpg'
    },
    {
      name: 'secret base ~君がくれたもの~ (10 years after Ver.)',
      artist: '茅野愛衣 / 戸松遥 / 早見沙織',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/%E8%8C%85%E9%87%8E%E6%84%9B%E8%A1%A3%2C%E6%88%B8%E6%9D%BE%E9%81%A5%2C%E6%97%A9%E8%A6%8B%E6%B2%99%E7%B9%94%20-%20secret%20base%20%7E%E5%90%9B%E3%81%8B%E3%82%99%E3%81%8F%E3%82%8C%E3%81%9F%E3%82%82%E3%81%AE%7E%20%2810%20years%20after%20Ver.%29.mp3',
      cover: 'https://s2.ax1x.com/2019/03/15/AVmEQA.jpg'
    }
  ]
}
