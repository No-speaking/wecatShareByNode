var router = require('koa-router')();
const bodyParser = require('koa-bodyparser')
const wechat  = require('../service/wechatByNode-master/wechat/wechat'),
      config = require('../service/wechatByNode-master/config.json');//引入配置文件
router.use(bodyParser());
var wechatApp = new wechat(config); //实例wechat 模块
//用于处理所有进�?3000 端口 get 的连接请�?
// router.get('/', async(ctx) => {
//     let request = ctx.request;
//     console.log("***********************************")    
//     console.log(ctx)
//     console.log("***********************************")
//     let req_query = request.query;
//     wechatApp.auth(req,res);
// });
// //用于请求获取 jsapi_ticket
// router.post('/getSign', async(ctx) => {
//     wechatApp.getSign(ctx.req).then(function(data){
//         ctx.res.send(data);
//     });    
// });



router.post('/getSign', async(ctx) => {
    let request = ctx.request;
    let req_query = request.body;
    let getData = await wechatApp.getSign(req_query);
    ctx.body = getData
});

// /weishuedu/api
module.exports = router










//����
//var wechat = require('../routes/wechat')
//router.use('/wechat',wechat.routes(),wechat.allowedMethods());
//module.exports = router;

