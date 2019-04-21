// https://vuex.vuejs.org/en/actions.html
import Services from '@/services'

export default {
  async getAllLists ({ commit }, payload) {
    const boardId = payload.board_id
    const response = await Services.Api.secured().get(`/boards/${boardId}/lists`)
    commit('setLists', response.data)
  }
}
