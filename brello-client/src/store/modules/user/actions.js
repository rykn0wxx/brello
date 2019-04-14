// https://vuex.vuejs.org/en/actions.html

export default {
  setToken ({ commit }, payload) {
    commit('setToken', payload)
  },
  setUser ({ commit }, payload) {
    commit('setUser', payload)
  },
  logoutUser ({ commit }) {
    commit('logoutUser')
  }
}
