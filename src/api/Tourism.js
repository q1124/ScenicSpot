import setting from '@/setting'
import axios from 'axios'

class API {
  static get baseUrl () {
    return process.env.NODE_ENV === 'development'
      ? '/API'
      : setting.api.fullPath
  }

  // 取得所有活動
  static getTourism () {
    return axios.get('https://tdx.transportdata.tw/api/basic' + '/v2/Tourism/Activity?%24top=30&%24format=JSON')
  }
}

export default API
