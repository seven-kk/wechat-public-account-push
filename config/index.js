export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx86e08a550d80e04a",
    // 公众号appSecret
    appSecret: "718aaddfbb3a5a4019478c4acfeb79ee",
    // 模板消息id
    templateId: "	rB3ErrPKgr1S-EJTmacuY9wQ-IcMiUIJLF2djj-X7tw",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["o-W2p6LYK1p42tt_-DezLMqpjTmo"],
     
    // 信息配置
    ewai: "  ",
    // 所在省份
    province: "江西",
    // 所在城市
    city: "南昌",
   
    // 在一起的日子，格式同上
    loveDate: "2020-06-22",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "希希", "year": "2003", "date": "06-20", "type": 'new'},
      {"name": "哥哥", "year": "1996", "date": "01-07", "type": 'new'},
    ],
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
//{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
