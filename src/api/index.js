import axios from 'axios'
import { URL } from '@/config'

axios.defaults.baseURL = URL

export const getToplistDetail = params => {
    return axios.get('/toplist/detail', {
        params: params
    });
};

//发送验证码
export const sendcaptcha = params => {
    return axios.get('/captcha/sent', {
        params: params
    });
};

//验证验证码
export const verifycaptcha = params => {
    return axios.get('/captcha/verify', {
        params: params
    })
};

//校验登录状态
export const loginstatus=params=>{
	return axios.get('/login/status',{
		params:params
	})
}
//刷新登录状态
export const refreshstatus=params=>{
	return axios.get('/login/refresh',{
		params:params
	})
}
//获取用户详情

//推荐的新音乐 
export const  personalizednewsong=params=>{
	return axios.get('/personalized/newsong',{
		params:params
	})
}