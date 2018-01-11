/**
 * config
 * @type {{common: {baseUrl: string, appid: string, secret: string}, client: {}, server: {}}}
 */

const CONFIG = {
    api: 'https://api.mch.weixin.qq.com/pay/unifiedorder',		// api
    appid: '',													// 微信开放平台审核通过的应用APPID
    mch_id: '',													// 微信支付分配的商户号
    notify_url: '',												// 接收微信支付异步通知回调地址，通知url必须为直接可访问的url，不能携带参数。
    trade_type: 'JSAPI'											// 交易类型 JSAPI--公众号支付
}


if (typeof module !== 'undefined') {
	exports.CONFIG = CONFIG
}