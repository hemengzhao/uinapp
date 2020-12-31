// import url_path from '../common/config.js';
import store from '@/store';
/**
 * url String  接口地址
 * data Object 请求参数
 * method String 请求方式 默认GET
 * publicType Boolean  是否是开放接口   开放接口不需要携带token   默认 false
 * header Object 请求头设置
 * 
 * */
 
function base_request (url, data, method = 'GET', header = {}, publicType = false)  {
	
	const URL =  window.location.protocol + '//'+ window.location.host + '/';
	
	// Bearer yIKYyWxIkqSyXpLp7cJcjZleM3lYvP9M6Xw4L0R9BbOFBEYwDzZSUr1D20TGLQpG906Q4wTM
	if(store.getters['invitation/token']){
		header.Authorization = 'Bearer ' + store.getters['invitation/token'];
	}
	
    return uni.request({
        method,
        data,
        url: URL + url, 
        header
    })
}

/**
 * other里包含其他的参数设置
 * other.header     请求头设置
 * other.publicType  是否是开放接口 
 * **/
function postReq(url, data, other = {}) {
    return base_request(url, data, 'POST', other.header, other.publicType);
}

function getReq(url, data, other = {}) {
	
    return base_request(url, data, other.header, other.publicType);
}

function putReq(url, data, other = {}) {
    return base_request(url, data, 'PUT', other.header, other.publicType);
}

function deleteReq(url, data, other = {}) {
    return base_request(url, data, 'DELETE', other.header, other.publicType);
}

function putFileReq(url, data, header) {
	
    return base_request(url, data, 'PUT', header);
}

export default {
    postReq,
    getReq,
	putReq,
	deleteReq,
	putFileReq
}