
// 第三步， 通过微信返回过来的querystring来拿到 access_token 和 openid ，进行用户信息获取

const axios = require('axios');

async function getUserInfo (data) {

	let access_token = data.access_tokenl;
    let refresh_token = data.refresh_tokenl;
    let openid = data.openid;
    let res = await axios.get('https://api.weixin.qq.com/sns/userinfo', {
    	params: {
    		access_token: access_token,
            openid: openid,
            lang: 'zh_CN'
    	}
    });
    let userInfo = res.data;
    return userInfo;
    
}

exports.getUserInfo = getUserInfo;