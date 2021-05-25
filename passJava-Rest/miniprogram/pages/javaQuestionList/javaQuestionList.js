const config = require('../../config')
const mock = require('../../mock')
const env = require('../../env')
const { baseUrl } = require('../../env')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    javaQuestions: [],
    javaQuestionList: [],
    isLoading: true,
    imageUrl: config.url.images,
    type: '',
    title: '',
    typeID: 1
  },

  onLoad(e) {
    this.setData({
      type: e.type,
      title: e.title,
    })
    wx.setNavigationBarTitle({
      title: e.title,
    })
    this.getTypeID()
  },
  
  onShow: function () {
    this.getJavaQuestionsList()
  },

  onShareAppMessage() {
    // return custom share data when user share.
  },

  /**
   * 获取类型的id
   */
  getTypeID()
  {
    wx.request({
      url: baseUrl+'/question/type/list',
      data: {"page":"1","limit":"10"},
      success:(res)=>{
        let typeList=res.data.page.list
        for (let index = 0; index < typeList.length; index++) {
          if(typeList[index].type === this.data.type)
          {
             this.data.typeID = typeList[index].id
          }
        }
      }
    })
  },

  getJavaQuestionsList: function () {
    // 下面这个是自定义的函数
    // =======================================================
    wx.request({
      url: baseUrl+'/question/v1/admin/question/list',
      data: {"page":"1","limit":"10"},
      success:(res)=>{
        let javaQuestions = res.data.page.list
        let javaQuestionList = []
        for (let javaQuestion of javaQuestions) {

          // 判断类型，只显示和当前类型匹配的题目
          if(javaQuestion.type===this.data.typeID)
          {
            javaQuestionList.push({
              id: javaQuestion.id,
              imageUrl: this.getImageUrl(this.data.type),
              answer: javaQuestion.answer,
              title: javaQuestion.title,
              subTitle: javaQuestion.subTitle ? javaQuestion.subTitle : ''
            })
          }
        }
        this.setData({
          javaQuestions: javaQuestions,
          javaQuestionList: javaQuestionList,
          isLoading: false,
        })
      }
    })
  // ===================================================
    // wx.cloud.callFunction({
    //   // 云函数名称
    //   name: 'getJavaQuestionList',
    //   data: {
    //     type: this.data.type
    //   }
    // }).then(res => {
    //   let javaQuestions = res.result.data
    //   let javaQuestionList = this.formatList(javaQuestions, this.type)
    //   this.setData({
    //     javaQuestions: javaQuestions,
    //     javaQuestionList: javaQuestionList,
    //     isLoading: false,
    //   })
    // }).catch(console.error)
  },
  // formatList: function (javaQuestions) {
  //   let javaQuestionList = []
  //   for (let javaQuestion of javaQuestions) {
  //     javaQuestionList.push({
  //       id: javaQuestion._id,
  //       imageUrl: this.getImageUrl(type),
  //       answerUrl: javaQuestion.answer,
  //       title: javaQuestion.title,
  //       subTitle: javaQuestion.subTitle ? javaQuestion.subTitle : ''
  //     })
  //   }
  //   return javaQuestionList
  // },

  getImageUrl: function(type) {
    let imageUrl = '';
    switch(type) {
      case "javaBasic" : 
        imageUrl = "../../images/index/index_answer.png"
        break
      case "jvm" : 
        imageUrl = "../../images/index/icon_code.png"
        break
      default:
        imageUrl = "../../images/index/index_answer.png"
        break
    }
    return imageUrl;
  }
})