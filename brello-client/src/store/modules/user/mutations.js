// https://vuex.vuejs.org/en/mutations.html

export default {
  setToken (state, payload) {
    state.token = payload
  },
  setUser (state, payload) {
    state.user = payload
  },
  logoutUser (state) {
    state.user = null
    state.token = null
  }
}
