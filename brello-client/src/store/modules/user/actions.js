// https://vuex.vuejs.org/en/actions.html
import Services from '@/services'

export default {
  logoutUser ({ commit }) {
    commit('logoutUser')
  },
  async setUserToken({ commit }, payload) {
    const { email, password } = payload
    const response = await Services.AuthenticationService.login({
      auth: {
        email,
        password
      }
    })
    commit('setToken', response.data.jwt)
  },
  async logInUser ({ dispatch, commit }, payload) {
    await dispatch('setUserToken', payload)
    const response = await Services.Api.secured().get(`users/${payload.email}`)
    commit('setUser', response.data)
  },
  async registerUser ({ dispatch, commit }, payload) {
    const { email, username, password, password_confirmation } = payload
    const response = await Services.AuthenticationService.register({
      user: {
        email,
        username,
        password,
        password_confirmation
      }
    })
    await dispatch('setUserToken', payload)
    commit('setUser', response.data)
  }
}
