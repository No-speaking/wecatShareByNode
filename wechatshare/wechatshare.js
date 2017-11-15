// 请求签名
$(document).ready(function(){
  $.ajax({
    url: "./wechat/getSign",
    type: 'post',
    data: { url: location.href.split('#')[0] },
    success:function(res){
      wx.config({
        debug: false,
        appId: 'wx97e2150844710a72',
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: [
        //   'checkJsApi',//判断当前客户端版本是否支持指定JS接口
          'onMenuShareAppMessage',//分享给朋友
          'onMenuShareTimeline',//分享到朋友圈
          'onMenuShareQQ',//分享到QQ
          'onMenuShareQZone'//分享到QQ空间
        ]
      }); 
      wx.ready(function () {
        var shareData = {
          title: document.title,// 分享标题
          desc: getDesc(),
          link: res.url,// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: getImage(),// 分享图标
        // success: function () { 
        //     // 用户确认分享后执行的回调函数
        // },
        // cancel: function () { 
        //     // 用户取消分享后执行的回调函数
        // }
        };
       
        wx.onMenuShareAppMessage(shareData);
        wx.onMenuShareTimeline(shareData);
        wx.onMenuShareQQ(shareData);
      });
      wx.error(function (res) {
        alert(res.errMsg);  // 正式环境记得关闭啊！！！！
      });
    }
  });
  // 获取描述字段方法
  function getDesc() {
    var meta = document.getElementsByTagName("meta");
    for (var i=0;i<meta.length;i++){
      if(typeof meta[i].name!="undefined"&&meta[i].name.toLowerCase()=="description"){
        return meta[i].content;
      }
    }
  };
  // 获取图片
  function getImage() {
    return 'http://'+location.host+'/image/mooc.png';
  };

})

