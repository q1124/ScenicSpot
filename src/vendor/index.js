import Vue from 'vue'
// import settings from '@/settings'

// axios
import axios from './axios'

// moment
import moment from 'moment'

window.axios = axios
window.moment = moment
Vue.prototype.moment = moment
