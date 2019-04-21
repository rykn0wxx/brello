// https://vuex.vuejs.org/en/mutations.html

export default {
  setBoards (state, payload) {
    state.boards = payload
  },
  newBoard (state, payload) {
    state.boards.push(payload)
  },
  clearBoards (state) {
    state.boards = null
    state.activeBoard = null
  }
}
