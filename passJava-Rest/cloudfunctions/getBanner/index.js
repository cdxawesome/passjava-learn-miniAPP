  // 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database(
    {
      env: 'passjava-learn-1g8c11523610c04a'
    }
  )
  return db.collection('banner').get()
}