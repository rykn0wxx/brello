// https://vuex.vuejs.org/en/getters.html

export default {
  getUser: (state) => state.user,
  getToken: (state) => state.token,
  userLogin: (state) => state.user !== null && state.token !== null
}
