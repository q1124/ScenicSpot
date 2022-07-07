import router from '@/router'
import store from '@/store'

// axios
import axios from 'axios'
window.axios = axios
axios.defaults.timeout = 500000
// Add a response interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    if (!error.response) {
      console.log('error')
      // store.dispatch('user/cleanUserData')
      // router.push('/pages/login').catch(() => {})
      // return Promise.reject({
      //   response: {
      //     data: null
      //   }
      // })
    }
    if (error.response && error.response.status === 500) {
      return Promise.reject(error)
    }
    if (Number(error.response.data.code) === 10010 ||
      // Number(error.response.data.code) === 10020 ||
      Number(error.response.data.code) === 10030 ||
      error.response.status === 401
    ) {
      console.log('interceptors error')
      store.dispatch('user/cleanUserData')
      router.push('/pages/login').catch(() => {})
      throw error
    }
    return Promise.reject(error)
  })

export default axios
