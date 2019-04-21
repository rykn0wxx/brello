// https://vuex.vuejs.org/en/mutations.html

export default {
  setBoards (state, payload) {
    state.boards = payload
  },
  setBoard (state, payload) {
    state.currentBoard = payload
  },
  newBoard (state, payload) {
    state.boards.push(payload)
  },
  clearBoards (state) {
    state.boards = null
    state.activeBoard = null
  }
}
