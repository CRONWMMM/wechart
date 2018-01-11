
const CONFIG = require('../common/config').CONFIG
const api = CONFIG.api

let demo = `<xml>
               <appid>${CONFIG.appid}</appid>
               <mch_id>${CONFIG.mch_id}</mch_id>
               <body>JSAPI支付测试</body>
               <sign>0CB01533B8C1EF103065174F50BCA001</sign>
               <sign_type>MD5</sign_type>
               <nonce_str>1add1a30ac87aa2db72f57a2375d8fec</nonce_str>
               <notify_url>http://wxpay.wxutil.com/pub_v2/pay/notify.v2.php</notify_url>
               <openid>oUpF8uMuAJO_M2pxb1Q9zNjWeS6o</openid>
               <out_trade_no>1415659990</out_trade_no>
               <spbill_create_ip>14.23.150.211</spbill_create_ip>
               <total_fee>1</total_fee>
               <trade_type>JSAPI</trade_type>
            </xml>`