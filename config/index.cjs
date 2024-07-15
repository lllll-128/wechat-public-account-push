/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe599ddfca42cb074',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '6c8425138705ba7a7dfcbef9475f8206',

  PROVINCE: '辽宁',
  CITY: '大连',

  USERS: [
    {
      // 想要发送的人的名字
      name: '越越宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ov2176JF0lE1p5RGScYM0F6XpCxw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'cUDHMFHVgx7dsF8OuKCN0Gic1vEsCu2vKafdDzL6TTU	',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-11',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'Yue', year: '1999', date: '08-02',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'Yue', year: '1999', date: '09-11',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '08-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-08-31' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'cUDHMFHVgx7dsF8OuKCN0Gic1vEsCu2vKafdDzL6TTU	',

  CALLBACK_USERS: [
    {
      name: 'Zhl',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ov2176JF0lE1p5RGScYM0F6XpCxw',
    }
  ],

}

module.exports = USER_CONFIG

