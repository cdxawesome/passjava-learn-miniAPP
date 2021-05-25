const banner = { 
  "item": [
    {
      'isShow': true,
      "bannerUrl": "https://7465-test-0jlva-1254012214.tcb.qcloud.la/banner/pmp2.png?sign=4498f01db8b7349915d34352d98f0c83&t=1556897293", 
      "navigationType": "pmp", 
      "needRegister": true, 
      "displayOrder": 1 
    },
    {
      'isShow': true,
      "bannerUrl": "https://7465-test-0jlva-1254012214.tcb.qcloud.la/banner/pmp2.png?sign=4498f01db8b7349915d34352d98f0c83&t=1556897293", 
      "navigationType": "pmp", 
      "needRegister": true, 
      "displayOrder": 2 
    }
  ]
}

const dailyQuestions = {
  "items": [
    {
      'id': 123,
      "imageUrl": "https://7465-test-0jlva-1254012214.tcb.qcloud.la/banner/pmp2.png?sign=4498f01db8b7349915d34352d98f0c83&t=1556897293",
      "title": "2019-05-08 练习题",
      "subTitle": "每天进步一点点",
      "pagePath": '/dailyQuestions/daily0508.html'
    }, {
      'id': 234,
      "imageUrl": "https://7465-test-0jlva-1254012214.tcb.qcloud.la/banner/pmp2.png?sign=4498f01db8b7349915d34352d98f0c83&t=1556897293",
      "title": "2019-05-09 练习题",
      "subTitle": "每天进步一点点",
      "pagePath": '/dailyQuestions/daily0509.html'
    }]
}

const releaseTimeLine = {
  "name": "面试突击",
  "description": "这款小程序可以帮助大家利用零碎时间刷题和复习。纯个人开发，请多多支持！",
  "img": "https://7465-test-0jlva-1254012214.tcb.qcloud.la/profile/banner1.png",
  "website": "csdn：https://blog.csdn.net/NoodleMaster",
  "github": "GitHub：https://github.com/hoktextbox",
  "wechatService": "公众号：xxxxxx",
  "wechat": "微信号：xxxxx",
  "aboutMe": "公众号：xxxxx，手写了 2W 字分布式算法总结和 6W 字 SpringCloud 实战总结，关注即可免费获取。",
  "timeLinelist": [
    {
      "date": "2021年5月22日",
      "version": "V1.0",
      "description": "小程序可正常进入首页",
    },
    {
      "date": "2021年5月23日",
      "version": "V1.0",
      "description": "小程序登录功能正常，首页图片显示正常，首页分类进入查看正常",
    },{
      "date": "2021年5月24日",
      "version": "V1.0",
      "description": "继续完善小程序，目前小程序已经和后台服务打通",
    }, {
      "date": "2021年5月25日",
      "version": "V1.0.0",
      "description": "小程序初始版本，首页功能展示"
    }
  ]
}

const mock = {
  banner: banner,
  dailyQuestions: dailyQuestions,
  releaseTimeLine: releaseTimeLine
}

module.exports = mock
