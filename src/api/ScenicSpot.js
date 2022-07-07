import setting from '@/setting'
import axios from 'axios'

class API {
  static get baseUrl () {
    // proxy
    return process.env.NODE_ENV === 'development'
      ? '/API'
      : setting.api.fullpath
  }

  // 所有觀光資料
  static getScenicSpot () {
    return axios.get('https://tdx.transportdata.tw/api/basic' + '/v2/Tourism/ScenicSpot?%24top=30&%24format=JSON')
  }
}

export default API
