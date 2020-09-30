// /** @format */

import axios from 'axios'
import { getLocalStorage } from '@troyexu/yl-fn'
import mapI18n from './mapI18n'
let apiurl = ''
let i18n = null
let service = {}
// const initFun = function(i18n, baseUrl) {
//   apiurl = baseUrl
//   i18n = i18n
// }

// service = axios.create({
//   baseURL: apiurl,
//   timeout: 5000,
// })
// // request interceptor
// service.interceptors.request.use(
//   (config) => {
//     config.headers['Authorization'] = `Bearer ${getLocalStorage('token')}`
//     return config
//   },
//   (error) => {
//     // Do something with request error
//     Promise.reject(error)
//   }
// )

// service.interceptors.request.use(
//   (config) => {
//     let addOption = {
//       lang: mapI18n[getLocalStorage('lang')],
//       device: 'mobile',
//     }
//     config.data = Object.assign(config.data || {}, addOption)
//     return config
//   },
//   (error) => {
//     // Do something with request error
//     Promise.reject(error)
//   }
// )

// // response interceptor
// service.interceptors.response.use(
//   async (response) => {
//     let resData = response.data
//     switch (resData.code) {
//       case 1012:
//         resData.codeMsg = resData.data[0]
//         break
//       case 2026:
//         resData.codeMsg = resData.message
//         break
//       case 2009:
//       case 2034:
//         resData.codeMsg = i18n.tc('errorMsg.__2034') + parseInt(resData.data.customer_dama)
//         break
//       case 1010:
//         resData.codeMsg = resData.message
//         window.location = '/#/login'
//         break
//       default:
//         resData.codeMsg = i18n.tc('errorMsg.__' + resData.code) || i18n.tc('errorMsg.__2009')
//         break
//     }

//     return response
//   },
//   async (error) => {
//     let errData
//     errData = error.response
//     errData.code = error.response.status
//     errData.codeMsg = i18n.tc('errorCode.__' + errData.status) || i18n.tc('errorCode.__1000')
//     return Promise.reject(errData)
//   }
// )
service = {}
export default service
