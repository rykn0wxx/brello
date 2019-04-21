// https://vuex.vuejs.org/en/actions.html
import Services from '@/services'

export default {
  clearBoards ({ commit }) {
    commit('clearBoards')
  },
  async getAllBoards ({ commit }) {
    const response = await Services.Api.secured().get('/boards')
    commit('setBoards', response.data)
  },
  async createBoard ({ commit }, payload) {
    const { name, user_id } = payload
    const response = await Services.Api.secured().post('/boards', {
      board: {
        name,
        user_id
      }
    })
    commit('newBoard', response.data)
  }
}
