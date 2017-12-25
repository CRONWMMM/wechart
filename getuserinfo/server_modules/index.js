

const getAccessToken = require('./getAccessToken').getAccessToken;
const getUserInfo = require('./get-userInfo').getUserInfo;

/**
 * @param query {string} 微信重定向跳转过来时候带的请求对象，res.query
 * @param callback {function} 完成后的回调函数，接收获取到的userInfo参数
 */
async function getUserInfo (query, callback) {

	if (!!query.code && !!query.state) {
		let tokenData = await getAccessToken(query);
		let userInfo = await getUserInfo(tokenData);
	}	

	callback(userInfo);

}

exports.getUserInfo = getUserInfo;