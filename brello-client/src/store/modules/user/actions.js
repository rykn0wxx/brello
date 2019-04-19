// https://vuex.vuejs.org/en/actions.html
import Services from '@/services'

export default {
  logoutUser ({ commit }) {
    commit('logoutUser')
  },
  async setUserToken({ commit }, payload) {
    const response = await Services.AuthenticationService.login({
      auth: {
        email: payload.login,
        password: payload.password
      }
    })
    commit('setToken', response.data.jwt)
  },
  async logInUser ({ dispatch, commit }, payload) {
    await dispatch('setUserToken', payload)
    const response = await Services.Api.secured().get(`users/${payload.login}`)
    commit('setUser', response.data)
  }
}
