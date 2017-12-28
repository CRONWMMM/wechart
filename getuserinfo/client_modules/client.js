/**
 * client
 * @param CONFIG {object} 微信公众号通用信息
 */
;(function (CONFIG) {

	var USERAGENT = window.navigator.userAgent.toLowerCase(),
		ISWECHART = /micromessenger/g.test(USERAGENT),
		CONFIG = !!CONFIG ? CONFIG : {
			common: {},
			client: {},
			server: {}
		},
		common = CONFIG.common,
		appid = checkInfo(common.appid, 'string'),
		baseUrl = checkInfo(common.baseUrl, 'string'),
		redirect_uri = encodeURI(baseUrl + ''),		// client 获取用户信息成功后的默认跳转地址【相对路径】
		targetUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ appid +'&redirect_uri='+ redirect_uri +'&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect';

	if (ISWECHART) {
		window.location.href = encodeURI(targetUrl);
		return ;
	}

    /**
	 * 类型检测
     * @param info
     * @param type
     * @returns {string}
     */
	function checkInfo (info, type) {
		return typeof info === type ? info : '';
	}

})();