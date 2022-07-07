import setting from '@/setting'
import axios from 'axios'

class API {
  static get baseUrl () {
    // proxy
    return process.env.NODE_ENV === 'development'
      ? '/API'
      : setting.api.fullpath
  }

  // 所有美食資料
  static getRestaurant () {
    return axios.get('https://tdx.transportdata.tw/api/basic' + '/v2/Tourism/Restaurant?%24top=30&%24format=JSON')
  }
}

export default API
