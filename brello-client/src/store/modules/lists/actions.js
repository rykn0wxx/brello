// https://vuex.vuejs.org/en/actions.html
import Services from '@/services'

export default {
  async getAllLists ({ commit }, payload) {
    const response = await Services.Api.secured().get(`/boards/${payload}/lists`)
    commit('setLists', response.data)
  }
}
