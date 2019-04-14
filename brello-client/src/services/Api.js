import axios from 'axios'
import store from '@/store'

export default {
  base () {
    return axios.create({
      baseURL: store.getters.getApiBaseUrl
    })
  },
  secured () {
    return axios.create({
      baseURL: store.getters.getApiBaseUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `JWT ${store.getters['user/getToken']}`
      }
    })
  }
}
