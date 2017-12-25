

// 第二步， 通过微信重定向带过来的querystring来拿到code，进行access_token获取

const axios = require('axios');
const CONFIG = !!require('../common/config').CONFIG ? require('../common/config').CONFIG : {
	common: {},
	client: {},
	server: {}
};


// 类型检测
function checkInfo (info, type) {
	return typeof info === type ? info : '';
}

async function getAccessToken (query) {
	let common = CONFIG.common,
	let code = checkout(query.code, 'string');
	let state = checkout(query.state, 'string');
	appid = checkInfo(common.appid, 'string'),
	secret = checkInfo(common.secret, 'string'),
	let res = await axios.get('https://api.weixin.qq.com/sns/oauth2/access_token', {
		params: {
			appid: appid,
			secret: secret,
			code: code,
			grant_type: 'authorization_code'
		}
	});
	let data = res.data;
	console.log(`-------------------get-access_token: ${data}`);
	return data;
}

exports.getAccessToken = getAccessToken