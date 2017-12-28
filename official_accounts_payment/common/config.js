/**
 * config
 * @type {{common: {baseUrl: string, appid: string, secret: string}, client: {}, server: {}}}
 */
const CONFIG = {
	common: {
		baseUrl: '',
		appid: '',
		secret: ''
	},
	client: {},
	server: {}
}


if (typeof module !== 'undefined') {
	exports.CONFIG = CONFIG
}