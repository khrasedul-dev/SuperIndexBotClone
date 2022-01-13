const {Composer} = require('micro-bot')
const cheerio = require('cheerio')
const request = require('request')

const mongoose = require('mongoose')

//custom model
const postModel = require('./DBSchema')
const adModel = require('./ADSchema')

//bot instance

const bot = new Composer()


//DB mail gejaho3293@rubygon.com pass: rps
mongoose.connect('mongodb+srv://rasedul20:rasedul20@telegramproject.6rm9z.mongodb.net/telegramDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).catch((e)=>{
        console.log(e)
}).then((d)=>console.log('Database connected')).catch((e)=>console.log(e))



let per_page = 10


let searchSize;
let searchKey;

let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99']




bot.command(["start","home"],ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, "🔎 Send Keyword to find groups, channel and bots ", {
        reply_markup:{
            keyboard: [
                [{text: "⚑ Language : Chinese"}],
                [{text: "🔊 Channels"},{text:"⛺ Groups"}],
                [{text: "😼 Bots"},{text: "🔰 Tags"}],
                [{text: "❓ Help"},{text: "👥 My Account"}]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    }).catch((e)=>ctx.reply("Something is wrong"))
})




bot.action(["start","home"],ctx=>{

    ctx.answerCbQuery()
    ctx.telegram.sendMessage(ctx.chat.id, "🔎 Send Keyword to find groups, channel and bots ", {
        reply_markup:{
            keyboard: [
                [{text: "⚑ Language : Chinese"}],
                [{text: "🔊 Channels"},{text:"⛺ Groups"}],
                [{text: "😼 Bots"},{text: "🔰 Tags"}],
                [{text: "❓ Help"},{text: "👥 My Account"}]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    }).catch((e)=>ctx.reply("Something is wrong"))

})




bot.hears(["start","home","⚑ 语言集 : English"],ctx=>{
    
    ctx.telegram.sendMessage(ctx.chat.id, "🔎 Send Keyword to find groups, channel and bots ", {
        reply_markup:{
            keyboard: [
                [{text: "⚑ Language : Chinese"}],
                [{text: "🔊 Channels"},{text:"⛺ Groups"}],
                [{text: "😼 Bots"},{text: "🔰 Tags"}],
                [{text: "❓ Help"},{text: "👥 My Account"}]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    }).catch((e)=>ctx.reply("Something is wrong"))

})





bot.action(['回去','开始',],ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, "🔎 发送关键字以查找群组、频道和机器人 ", {
        reply_markup:{
            keyboard: [
                [{text: "⚑ 语言集 : English"}],
                [{text: "🔊 频道"},{text:"⛺ 群组"}],
                [{text: "😼 机器人"},{text: "🔰 标签"}],
                [{text: "❓ 帮助"},{text: "👥 我的帐户"}]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    }).catch((e)=>ctx.reply("出了点问题"))
})



bot.hears('⚑ Language : Chinese',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, "🔎 发送关键字以查找群组、频道和机器人 ", {
        reply_markup:{
            keyboard: [
                [{text: "⚑ 语言集 : English"}],
                [{text: "🔊 频道"},{text:"⛺ 群组"}],
                [{text: "😼 机器人"},{text: "🔰 标签"}],
                [{text: "❓ 帮助"},{text: "👥 我的帐户"}]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    }).catch((e)=>ctx.reply("出了点问题"))
})




bot.hears("👥 My Account",ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, "👋 Wellcome "+ctx.from.first_name +"\n\n"+"UID: "+ctx.from.id, {
        reply_markup: {
            inline_keyboard: [
                [{text: "Settings" , callback_data: 'settings'},{text: "My Links", callback_data: 'mylinks'}],
                [{text: "Go Back", callback_data: 'start'}]
            ]
        }
    }).catch((e)=>ctx.reply("Something is wrong"))
})

const cng_array = [/setT/gi,/setD/gi]

bot.hears(cng_array,ctx=>{


    let text = ctx.update.message.text

    let type = ctx.match[0].toLocaleLowerCase()
    
    if (type === 'sett') {

        ctx.telegram.setChatTitle(ctx.chat.id , text.replace(/setT/gi,'')).then((d)=> ctx.reply("Title successfully changed")).catch((e)=>ctx.reply("The BOT needs to admin permission to change title"))

    }else if(type == 'setd'){

        ctx.telegram.setChatTitle(ctx.chat.id , text.replace(/setD/gi,'')).then((d)=> ctx.reply("Description successfully changed")).catch((e)=>ctx.reply("The BOT needs to admin permission to change description"))
    }

})


bot.hears("👥 我的帐户",ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, "👋 惠康 "+ctx.from.first_name +"\n\n"+"UID: "+ctx.from.id, {
        reply_markup: {
            inline_keyboard: [
                [{text: "设置" , callback_data: '设置'},{text: "我的链接", callback_data: '我的链接'}],
                [{text: "回去", callback_data: '回去'}]
            ]
        }
    }).catch((e)=>ctx.reply("出了点问题"))
})

const cng_array2 = [/setCnT/gi,/setCnD/gi]

bot.hears(cng_array2,ctx=>{


    let text = ctx.update.message.text

    let type = ctx.match[0].toLocaleLowerCase()
    
    if (type === 'setCnT') {

        ctx.telegram.setChatTitle(ctx.chat.id , text.replace(/setT/gi,'')).then((d)=> ctx.reply("标题已成功更改")).catch((e)=>ctx.reply("BOT 需要管理员权限才能更改标题"))

    }else if(type == 'setCnD'){

        ctx.telegram.setChatTitle(ctx.chat.id , text.replace(/setD/gi,'')).then((d)=> ctx.reply("说明已成功更改")).catch((e)=>ctx.reply("BOT 需要管理员权限才能更改描述"))
    }

})

bot.hears(/ad/gi,(ctx)=>{
    


        const text = ctx.update.message.text
        const ad_text = text.replace(/ad/gi,'').trim()
        const ready_text = ad_text.split(' ')



        // ctx.deleteMessage()


        

        const postData = {
            userID: ctx.from.id,
            tags: ready_text[1],
            type: ready_text[2],
            url: ready_text[0]
        }

        const adModelObject = new adModel({...postData})

        adModelObject.save((e , data)=>{
            if(e){
                console.log(e)
            }else{

                ctx.reply(`${ready_text[2].toUpperCase()} added successfully`).catch((e)=>ctx.reply("Somthing is wrong"))

            }
        })


    
    
})

bot.hears(/adCn/gi,(ctx)=>{



        const text = ctx.update.message.text
        const ad_text = text.replace(/ad/gi,'').trim()
        const ready_text = ad_text.split(' ')



        // ctx.deleteMessage()


        const postData = {
            userID: ctx.from.id,
            tags: ready_text[1],
            type: ready_text[2],
            url: ready_text[0]
        }

        const adModelObject = new adModel({...postData})

        adModelObject.save((e , data)=>{
            if(e){
                console.log(e)
            }else{

                ctx.reply(`${ready_text[2].toUpperCase()} 添加成功 `).catch((e)=>ctx.reply("出了点问题"))

            }
        })


    
    
})





bot.hears(/t\.me/gi,ctx=>{
    


        const text = ctx.update.message.text
        const ready_text = text.split(' ')
        

        request(ready_text[0],(error,response,html)=>{

            if (!error && response.statusCode == 200) {

                const $ = cheerio.load(html)
                
                const title = $(".tgme_page_title >span").text() ;
                const desc = $(".tgme_page_description").text();
                const m = $(".tgme_page_extra").text();
                const m2 = m.split(',')
                const member = m2[0]


                
                const postData = {
                    title: title,
                    desc: desc,
                    member: member,
                    userID: ctx.from.id,
                    tags: ready_text[1],
                    type: ready_text[2],
                    url: ready_text[0]
                }
        
                const postObject = new postModel({...postData})
        
                postObject.save((e , data)=>{
                    if(e){
                        console.log(e)
                    }else{
        
                        ctx.reply(`${ready_text[2].toUpperCase()} added successfully / ${ready_text[2].toUpperCase()} 添加成功 `).catch((e)=>ctx.reply("Somthing is wrong"))
        
                    }
                })

                

            }

        })


})






bot.action('mylinks',ctx=>{

    const searchQuery = {
        userID : ctx.from.id
    }

    const first = postModel.find(searchQuery,(e,data)=>{


        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `You added is 0`, callback_data: "home"}])
            }

            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {


                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("Something is wrong"))
    

                    }
          

            }).limit(1).sort("-1")  

        }
    })





})


bot.action('我的链接',ctx=>{

    const searchQuery = {
        userID : ctx.from.id
    }

    const first = postModel.find(searchQuery,(e,data)=>{


        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `您添加的是 0`, callback_data: "home"}])
            }

            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {


                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("出了点问题"))
    

                    }
          

            }).limit(1).sort("-1")  

        }
    })





})




bot.hears('❓ Help',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id, `
    ✋ Hello ${ctx.from.first_name} ${ctx.from.last_name || "."}
    Welcome to use @${ctx.botInfo.username}`,
    {
        reply_markup:{
            inline_keyboard:[
                [{text: "Group/Channel Setting",callback_data: "gc"}],
                [{text: "How to add a group/channel/bot ?",callback_data: "rules"}],
                [{text: "Go back",callback_data: "home"}]
            ]
        }
    })
})

bot.hears('❓ 帮助',ctx=>{

    ctx.telegram.sendMessage(ctx.chat.id, `
    ✋ 你好 ${ctx.from.first_name} ${ctx.from.last_name || "."}
    欢迎使用 @${ctx.botInfo.username}`,
    {
        reply_markup:{
            inline_keyboard:[
                [{text: "组/频道设置",callback_data: "gcCN"}],
                [{text: "如何添加群组/频道/机器人？",callback_data: "rulesCN"}],
                [{text: "回去",callback_data: "回去"}]
            ]
        }
    })


})

bot.action('gc',ctx=>{
    ctx.reply(`
    The bot needs to admin permission

    1. To change title : setT yourtitle
    2. To change description : setD yourdescription

    `)
})

bot.action('gcCN',ctx=>{
    ctx.reply(`
    机器人需要管理员权限

    1.更改标题：setCnT 你的题目
    2.更改描述：setCnD 你的描述

    `)
})

bot.action(['add','rules'],ctx=>{
    ctx.reply(`
    Rules:
    1. Type can be bot/channel/group
    2. See tags list 
    3. Its must be:  <> URL<> tags <>type
    4. URL must be start with http:// or https://
    5.
    example: https://t*me/bitshibatoken crypto bot
    example: https://t*me/trendstickers sticker channel
    example: https://t*me/englishchattinggpp chat group

    Example links start should be replace by dot

    6. Tags to index: 
    chain
    game
    meme
    metaverse
    defi
    exchange
    dex
    comprehensive
    chart
    financial
    otc
    nft
    technology
    gambling
    pay
    shop
    other
    
    `)
})


bot.action('rulesCN',ctx=>{
    ctx.reply(`
    规则:
    1.类型可以是 机器人/频道/组
    2. 查看标签列表
    3. 它必须是:  <> URL<> 标签 <> 类型
    4. URL 必须以 http:// or https://
    5.
    例子: https://t*me/bitshibatoken 加密货币 机器人
    例子: https://t*me/trendstickers 贴纸 渠道
    例子: https://t*me/englishchattinggpp 聊天 团体

    示例链接星号应替换为点

    6. 要索引的标签: 
    链
    游戏
    模因
    元节
    定义
    交换
    索引
    综合的
    图表
    金融
    场外交易
    nftcn
    技术
    赌博
    支付
    店铺
    其他
    
    `)
})


bot.hears('🔊 Channels',ctx=>{

    const searchQuery = {
        type: "channel"
    }


    let postion = [];

    const first = postModel.find(searchQuery,(e,data)=>{


        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `NO Channel found`, callback_data: "home"}])
            }



            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {

                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("Something is wrong"))
        
                        f.then((r)=>{      
                            second_code();
                        })
                    }
        

                

            }).limit(1).sort("-1")


        }


    }).limit(per_page).skip(0)


    function second_code() {

        postModel.find(searchQuery, (e,data)=>{

            searchSize = data.length
    
            let page_list = []
            let page_count;
    
            let b = []
            let total_page_number = data.length / per_page;
            let h = 1 ;
            let i;
            let step = 5
    
    
            if (e) {
                console.log(e)
            } else {
    
                if ( ( data.length % per_page ) == 0 ) {
                    page_count = data.length / per_page
                } else {
                    const count = data.length / per_page
                    page_count = Math.floor(count) + 1
                }
                
                for(i = 1; i <= total_page_number; i++){
    
                    if(i == step*h ){
    
                        page_list.push(b);
                        b = []
    
                        h++;
    
                    }
                    
                    if(total_page_number == i){
                        page_list.push(b);
                    }
    
                    b.push({text: i , callback_data: i});
                
                }
                
    
                ctx.telegram.sendMessage(ctx.chat.id , "Page list : ",{
                    reply_markup: {
                        inline_keyboard: page_list
                    }
                })
            }
        })

    }


})

bot.hears('🔊 频道',ctx=>{

    const searchQuery = {
        type: "频道"
    }


    let postion = [];

    const first = postModel.find(searchQuery,(e,data)=>{


        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `未找到频道`, callback_data: "回去"}])
            }



            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {

                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("出了点问题"))
        
                        f.then((r)=>{      
                            second_code();
                        })
                    }
        

                

            }).limit(1).sort("-1")


        }


    }).limit(per_page).skip(0)


    function second_code() {

        postModel.find(searchQuery, (e,data)=>{

            searchSize = data.length
    
            let page_list = []
            let page_count;
    
            let b = []
            let total_page_number = data.length / per_page;
            let h = 1 ;
            let i;
            let step = 5
    
    
            if (e) {
                console.log(e)
            } else {
    
                if ( ( data.length % per_page ) == 0 ) {
                    page_count = data.length / per_page
                } else {
                    const count = data.length / per_page
                    page_count = Math.floor(count) + 1
                }
                
                for(i = 1; i <= total_page_number; i++){
    
                    if(i == step*h ){
    
                        page_list.push(b);
                        b = []
    
                        h++;
    
                    }
                    
                    if(total_page_number == i){
                        page_list.push(b);
                    }
    
                    b.push({text: i , callback_data: i});
                
                }
                
    
                ctx.telegram.sendMessage(ctx.chat.id , "页面列表： ",{
                    reply_markup: {
                        inline_keyboard: page_list
                    }
                })
            }
        })

    }


})

bot.hears('⛺ Groups',ctx=>{

    const searchQuery = {
        type: "group"
    }

    let postion = [];

    const first = postModel.find(searchQuery,(e,data)=>{


        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `NO Group found`, callback_data: "home"}])
            }

            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {


                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("Something is wrong"))
        
                        f.then((r)=>{      
                            second_code();
                        })
                    }
          

            }).limit(1).sort("-1")

            

        }
    }).limit(per_page).skip(0)


    function second_code() {

        postModel.find(searchQuery, (e,data)=>{

            searchSize = data.length
    
            let page_list = []
            let page_count;
    
            let b = []
            let total_page_number = data.length / per_page;
            let h = 1 ;
            let i;
            let step = 5
    
    
            if (e) {
                console.log(e)
            } else {
    
                if ( ( data.length % per_page ) == 0 ) {
                    page_count = data.length / per_page
                } else {
                    const count = data.length / per_page
                    page_count = Math.floor(count) + 1
                }
                
                for(i = 1; i <= total_page_number; i++){
    
                    if(i == step*h ){
    
                        page_list.push(b);
                        b = []
    
                        h++;
    
                    }
                    
                    if(total_page_number == i){
                        page_list.push(b);
                    }
    
                    b.push({text: i , callback_data: i});
                
                }
                
    
                ctx.telegram.sendMessage(ctx.chat.id , "Page list : ",{
                    reply_markup: {
                        inline_keyboard: page_list
                    }
                })
            }
        })

    }

})


bot.hears('⛺ 群组',ctx=>{

    const searchQuery = {
        type: "群组"
    }

    let postion = [];

    const first = postModel.find(searchQuery,(e,data)=>{


        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `没有找到组`, callback_data: "回去"}])
            }

            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {


                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("出了点问题"))
        
                        f.then((r)=>{      
                            second_code();
                        })
                    }
          

            }).limit(1).sort("-1")

            

        }
    }).limit(per_page).skip(0)


    function second_code() {

        postModel.find(searchQuery, (e,data)=>{

            searchSize = data.length
    
            let page_list = []
            let page_count;
    
            let b = []
            let total_page_number = data.length / per_page;
            let h = 1 ;
            let i;
            let step = 5
    
    
            if (e) {
                console.log(e)
            } else {
    
                if ( ( data.length % per_page ) == 0 ) {
                    page_count = data.length / per_page
                } else {
                    const count = data.length / per_page
                    page_count = Math.floor(count) + 1
                }
                
                for(i = 1; i <= total_page_number; i++){
    
                    if(i == step*h ){
    
                        page_list.push(b);
                        b = []
    
                        h++;
    
                    }
                    
                    if(total_page_number == i){
                        page_list.push(b);
                    }
    
                    b.push({text: i , callback_data: i});
                
                }
                
    
                ctx.telegram.sendMessage(ctx.chat.id , "页面列表： ",{
                    reply_markup: {
                        inline_keyboard: page_list
                    }
                })
            }
        })

    }

})





bot.hears('😼 Bots',ctx=>{

    const searchQuery = {
        type: "bot"
    }

    let postion = [];

    const first = postModel.find(searchQuery,(e,data)=>{


        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `NO Bot found`, callback_data: "home"}])
            }


            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {


                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("Something is wrong"))
        
                        f.then((r)=>{      
                            second_code();
                        })
                    }
        

                

            }).limit(1).sort("-1")

            

        }
    }).limit(per_page).skip(0)


    function second_code() {

        postModel.find(searchQuery, (e,data)=>{

            searchSize = data.length
    
            let page_list = []
            let page_count;
    
            let b = []
            let total_page_number = data.length / per_page;
            let h = 1 ;
            let i;
            let step = 5
    
    
            if (e) {
                console.log(e)
            } else {
    
                if ( ( data.length % per_page ) == 0 ) {
                    page_count = data.length / per_page
                } else {
                    const count = data.length / per_page
                    page_count = Math.floor(count) + 1
                }
                
                for(i = 1; i <= total_page_number; i++){
    
                    if(i == step*h ){
    
                        page_list.push(b);
                        b = []
    
                        h++;
    
                    }
                    
                    if(total_page_number == i){
                        page_list.push(b);
                    }
    
                    b.push({text: i , callback_data: i});
                
                }
                
    
                ctx.telegram.sendMessage(ctx.chat.id , "Page list : ",{
                    reply_markup: {
                        inline_keyboard: page_list
                    }
                })
            }
        })

    }


})

bot.hears('😼 Bots',ctx=>{

    const searchQuery = {
        type: "bot"
    }

    let postion = [];

    const first = postModel.find(searchQuery,(e,data)=>{


        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `不 未找到`, callback_data: "回去"}])
            }


            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {


                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("出了点问题"))
        
                        f.then((r)=>{      
                            second_code();
                        })
                    }
        

                

            }).limit(1).sort("-1")

            

        }
    }).limit(per_page).skip(0)


    function second_code() {

        postModel.find(searchQuery, (e,data)=>{

            searchSize = data.length
    
            let page_list = []
            let page_count;
    
            let b = []
            let total_page_number = data.length / per_page;
            let h = 1 ;
            let i;
            let step = 5
    
    
            if (e) {
                console.log(e)
            } else {
    
                if ( ( data.length % per_page ) == 0 ) {
                    page_count = data.length / per_page
                } else {
                    const count = data.length / per_page
                    page_count = Math.floor(count) + 1
                }
                
                for(i = 1; i <= total_page_number; i++){
    
                    if(i == step*h ){
    
                        page_list.push(b);
                        b = []
    
                        h++;
    
                    }
                    
                    if(total_page_number == i){
                        page_list.push(b);
                    }
    
                    b.push({text: i , callback_data: i});
                
                }
                
    
                ctx.telegram.sendMessage(ctx.chat.id , "页面列表： ",{
                    reply_markup: {
                        inline_keyboard: page_list
                    }
                })
            }
        })

    }


})





const tags_array = ['chain','game','Meme','metaverse','defi','exchange','dex','comprehensive','chart','otc','nft','tech','gambling','pay','financial','shop','other']


bot.hears('🔰 Tags',ctx=>{

    ctx.telegram.sendMessage(ctx.chat.id, "🔰 Tags List:",{
        reply_markup:{
            inline_keyboard:[

                [{ text: "🎟Chain", callback_data: 'chain'}, {text: "⇗ Metaverse" , callback_data: 'metaverse'}],
                [{ text: "📃 Comprehensive", callback_data: 'comprehensive'}, {text: "💧 DEX" , callback_data: 'dex'}],
                [{ text: "💸 Exchange", callback_data: 'exchange'}, {text: "💹 DEFI" , callback_data: 'defi'}],
                [{ text: "💰Financing", callback_data: 'finance'}, {text: "🚀Pay" , callback_data: 'pay'}],
                [{ text: "💒OTC Market", callback_data: 'otc'}, {text: "💻 NFT" , callback_data: 'nft'}],
                [{ text: "💻Technology", callback_data: 'tech'}, {text: "📊 Chart" , callback_data: 'chart'}],
                [{ text: "🎮 Games", callback_data: 'game'}, {text: "🎞 Meme" , callback_data: 'meme'}],
                [{ text: "🎰Gambling", callback_data: 'gambling'}, {text: "🛒Shop" , callback_data: 'shop'}],
                [{ text: "🔣Other", callback_data: 'other'},{text: "↩️Back" , callback_data: 'home'}]

            ]
        }
    })

})

const tags_array2 = ['公链','游戏','模因','元宇宙','去中心金融','交易所','去中心化交易所','综合','图表','场外交易','nftcn','技术','赌博','支付','金融','店铺','其他']

bot.hears('🔰 标签',ctx=>{

    ctx.telegram.sendMessage(ctx.chat.id, "🔰 标签列表：",{
        reply_markup:{
            inline_keyboard:[

                [{ text: "🎟 公链", callback_data: '公链'}, {text: "⇗ 元宇宙" , callback_data: '元宇宙'}],
                [{ text: "📃 综合", callback_data: '综合'}, {text: "💧 去中心化交易所" , callback_data: '去中心化交易所'}],
                [{ text: "💸 交易所", callback_data: '交易所'}, {text: "💹 去中心金融" , callback_data: '去中心金融'}],
                [{ text: "💰 金融", callback_data: '金融'}, {text: "🚀 支付" , callback_data: '支付'}],
                [{ text: "💒 场外交易市场", callback_data: '场外交易'}, {text: "💻 NFT" , callback_data: 'nftcn'}],
                [{ text: "💻 技术", callback_data: '技术'}, {text: "📊 图表" , callback_data: '图表'}],
                [{ text: "🎮 游戏", callback_data: '游戏'}, {text: "🎞 模因" , callback_data: '模因'}],
                [{ text: "🎰 赌博", callback_data: '赌博'}, {text: "🛒 店铺" , callback_data: '店铺'}],
                [{ text: "🔣 其他", callback_data: '其他'},{text: "↩️ 后退" , callback_data: '回去'}]

            ]
        }
    })

})

bot.action(tags_array,ctx=>{
    
    const click_tags = ctx.update.callback_query.data

    const searchQuery = {
        tags: click_tags
    }

    let postion = [];

    const first = postModel.find(searchQuery,(e,data)=>{

        console.log(data)

        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `Result for ${click_tags} is 0`, callback_data: "home"}])
            }

            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {


                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("Something is wrong"))
        
                        f.then((r)=>{      
                            second_code();
                        })
                    }
        

                

            }).limit(1).sort("-1")

            

        }
    }).limit(per_page).skip(0)


    function second_code() {

        postModel.find(searchQuery, (e,data)=>{

            searchSize = data.length
    
            let page_list = []
            let page_count;
    
            let b = []
            let total_page_number = data.length / per_page;
            let h = 1 ;
            let i;
            let step = 5
    
    
            if (e) {
                console.log(e)
            } else {
    
                if ( ( data.length % per_page ) == 0 ) {
                    page_count = data.length / per_page
                } else {
                    const count = data.length / per_page
                    page_count = Math.floor(count) + 1
                }
                
                for(i = 1; i <= total_page_number; i++){
    
                    if(i == step*h ){
    
                        page_list.push(b);
                        b = []
    
                        h++;
    
                    }
                    
                    if(total_page_number == i){
                        page_list.push(b);
                    }
    
                    b.push({text: i , callback_data: i});
                
                }
                
    
                ctx.telegram.sendMessage(ctx.chat.id , "Page list : ",{
                    reply_markup: {
                        inline_keyboard: page_list
                    }
                })
            }
        })

    }


})


bot.action(tags_array2,ctx=>{
    
    const click_tags = ctx.update.callback_query.data

    const searchQuery = {
        tags: click_tags
    }

    let postion = [];

    const first = postModel.find(searchQuery,(e,data)=>{

        console.log(data)

        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `结果为 ${click_tags} 是 0`, callback_data: "回去"}])
            }

            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {


                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("出了点问题"))
        
                        f.then((r)=>{      
                            second_code();
                        })
                    }
        

                

            }).limit(1).sort("-1")

            

        }
    }).limit(per_page).skip(0)


    function second_code() {

        postModel.find(searchQuery, (e,data)=>{

            searchSize = data.length
    
            let page_list = []
            let page_count;
    
            let b = []
            let total_page_number = data.length / per_page;
            let h = 1 ;
            let i;
            let step = 5
    
    
            if (e) {
                console.log(e)
            } else {
    
                if ( ( data.length % per_page ) == 0 ) {
                    page_count = data.length / per_page
                } else {
                    const count = data.length / per_page
                    page_count = Math.floor(count) + 1
                }
                
                for(i = 1; i <= total_page_number; i++){
    
                    if(i == step*h ){
    
                        page_list.push(b);
                        b = []
    
                        h++;
    
                    }
                    
                    if(total_page_number == i){
                        page_list.push(b);
                    }
    
                    b.push({text: i , callback_data: i});
                
                }
                
    
                ctx.telegram.sendMessage(ctx.chat.id , "页面列表： ",{
                    reply_markup: {
                        inline_keyboard: page_list
                    }
                })
            }
        })

    }


})




bot.on('text',ctx=>{

    let user_input_tags = ctx.update.message.text

    searchKey = user_input_tags

    const searchQuery = [{
        desc: {$regex : new RegExp( user_input_tags, "i")}
    },
    {
        tags: user_input_tags
    }]

    let postion = [];

    const first = postModel.find({$or: searchQuery},(e,data)=>{

        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `Search result for ${user_input_tags} is 0 / ${user_input_tags} 的搜索结果为 0 `, callback_data: "home"}])
            }

            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {


                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("Something is wrong / 出了点问题"))
        
                        f.then((r)=>{      
                            second_code();
                        })
                    }
        

                

            }).limit(1).sort("-1")

            

        }
    }).limit(per_page).skip(0)


    function second_code() {

        postModel.find({$or: searchQuery}, (e,data)=>{

            searchSize = data.length
    
            let page_list = []
            let page_count;
    
            let b = []
            let total_page_number = data.length / per_page;
            let h = 1 ;
            let i;
            let step = 5
    
    
            if (e) {
                console.log(e)
            } else {
    
                if ( ( data.length % per_page ) == 0 ) {
                    page_count = data.length / per_page
                } else {
                    const count = data.length / per_page
                    page_count = Math.floor(count) + 1
                }
                
                for(i = 1; i <= total_page_number; i++){
    
                    if(i == step*h ){
    
                        page_list.push(b);
                        b = []
    
                        h++;
    
                    }
                    
                    if(total_page_number == i){
                        page_list.push(b);
                    }
    
                    b.push({text: i , callback_data: i});
                
                }
                
    
                ctx.telegram.sendMessage(ctx.chat.id , "Page List / 页面列表： ",{
                    reply_markup: {
                        inline_keyboard: page_list
                    }
                })
            }
        })

    }

})


bot.action(num,ctx=>{

    const page_number = ctx.update.callback_query.data;

    const first = postModel.find({},(e,data)=>{


        postCount = data.length

        if (e) {
            console.log(e)
        } else {

            let linkList = []

            if (data.length>0) {

                data.map((item,i)=>{

                    linkList.push(
                        [{ text: ` ${i+1}. ${item.title} - ${item.member}   `+"  ⇗" , url: item.url}]
                    )
    
                })

            } else {
                linkList.push([{text: `No post found / 没有找到帖子`, callback_data: "home"}])
            }

            adModel.find({},(e,data)=>{

                if (e) {
                    console.log(e)
                } else {


                    let f = ctx.telegram.sendMessage(ctx.chat.id, `AD: \n ${data[0].url}`,{
        
                        reply_markup: {
                            inline_keyboard: linkList
                        }
        
                    }).catch((e)=>ctx.reply("Something is wrong / 出了点问题"))
        
                        f.then((r)=>{      
                            second_code();
                        })
                    }
        

                

            }).limit(1).sort("-1")

            

        }
    }).limit(per_page).skip(per_page*page_number)


    function second_code() {

        postModel.find({}, (e,data)=>{

            searchSize = data.length
    
            let page_list = []
            let page_count;
    
            let b = []
            let total_page_number = data.length / per_page;
            let h = 1 ;
            let i;
            let step = 5
    
    
            if (e) {
                console.log(e)
            } else {
    
                if ( ( data.length % per_page ) == 0 ) {
                    page_count = data.length / per_page
                } else {
                    const count = data.length / per_page
                    page_count = Math.floor(count) + 1
                }
                
                for(i = 1; i <= total_page_number; i++){
    
                    if(i == step*h ){
    
                        page_list.push(b);
                        b = []
    
                        h++;
    
                    }
                    
                    if(total_page_number == i){
                        page_list.push(b);
                    }
    
                    b.push({text: i , callback_data: i});
                
                }
                
    
                ctx.telegram.sendMessage(ctx.chat.id , "Page List / 页面列表： ",{
                    reply_markup: {
                        inline_keyboard: page_list
                    }
                })
            }
        })

    }

})






// bot.launch()


module.exports = bot

