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

export const verifycaptcha = params => {
    return axios.get('/captcha/verify', {
        params: params
    })
};