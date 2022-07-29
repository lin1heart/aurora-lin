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
    appId: '2iC8wLxVn9Wvo7PjuOvMl9f5-9Nh9j0Va',
    appKey: 'CAv828CcVjQ77CdK1rdpKYYK'
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
      name: 'いつも何度でも',
      artist: '宗次郎',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/%E5%AE%97%E6%AC%A1%E9%83%8E%20-%20%E3%81%84%E3%81%A4%E3%82%82%E4%BD%95%E5%BA%A6%E3%81%A6%E3%82%99%E3%82%82.mp3',
      cover: 'https://s2.ax1x.com/2019/03/18/AnVo01.jpg'
    },
    {
      name: '未闻花名 - 口琴版',
      artist: 'V.A.',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/V.A.%20-%20%E6%9C%AA%E9%97%BB%E8%8A%B1%E5%90%8D%20-%20%E5%8F%A3%E7%90%B4%E7%89%88.mp3',
      cover: 'https://s2.ax1x.com/2019/03/18/AnEqMj.jpg'
    },
    {
      name: '恋は渾沌の隷也',
      artist: 'TAMUSIC',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/TAMUSIC%20-%20%E6%81%8B%E3%81%AF%E6%B8%BE%E6%B2%8C%E3%81%AE%E9%9A%B7%E4%B9%9F.mp3',
      cover: 'https://s2.ax1x.com/2019/03/18/AnQdLF.jpg'
    },
    {
      name: 'MEMORIA Piano Violin ver.',
      artist: 'TAMUSIC',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/TAMUSIC%20-%20MEMORIA%20Piano%20Violin%20ver.mp3',
      cover: 'https://s2.ax1x.com/2019/03/18/AnEoi8.png'
    },
    {
      name: '初音ミクの消失',
      artist: '石川綾子',
      url: 'https://aplayer-music.oss-cn-shanghai.aliyuncs.com/%E7%9F%B3%E5%B7%9D%E7%B6%BE%E5%AD%90%20-%20%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF%E3%81%AE%E6%B6%88%E5%A4%B1.mp3',
      cover: 'https://s2.ax1x.com/2019/03/19/An3jeO.jpg'
    }
  ]
}
