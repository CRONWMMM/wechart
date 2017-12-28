/**
 * client
 */

;var wechartPay = (function () {

	function wechartPay (appId, timeStamp, nonceStr, packages, signType, paySign) {
	    if (typeof WeixinJSBridge == "undefined"){

	        if( document.addEventListener ){
	            document.addEventListener('WeixinJSBridgeReady', function () {
	                onBridgeReady(appId, timeStamp, nonceStr, packages, signType, paySign);
	            }, false);
	        }else if (document.attachEvent){
	            document.attachEvent('WeixinJSBridgeReady', function () {
	                onBridgeReady(appId, timeStamp, nonceStr, packages, signType, paySign);
	            });
	            document.attachEvent('onWeixinJSBridgeReady', function () {
	                onBridgeReady(appId, timeStamp, nonceStr, packages, signType, paySign);
	            });
	        }
	    }else{
	        onBridgeReady(appId, timeStamp, nonceStr, packages, signType, paySign);
	    }
	}


	function onBridgeReady(appId, timeStamp, nonceStr, packages, signType, paySign){
	    WeixinJSBridge.invoke(
	        'getBrandWCPayRequest', {
	            "appId":appId,     		// 公众号名称，由商户传入
	            "timeStamp":timeStamp,  // 时间戳，自1970年以来的秒数
	            "nonceStr":nonceStr, 	// 随机串
	            "package":packages,		// 统一下单接口返回的prepay_id参数值，提交格式如：prepay_id=***
	            "signType":signType,    // 微信签名方式：
	            "paySign":paySign 		// 微信签名
	        },
	        function(res){				// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回 ok，但并不保证它绝对可靠。
	            if(res.err_msg == "get_brand_wcpay_request:ok" ) {
	                // error callback
	            }
	            else{
	            	// error callback
	            }
	        }
	    );
	}

	return wechartPay;
})();


