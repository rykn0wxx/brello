<template>
  <div class="board-section">
    <md-dialog :md-active.sync="addBoardFormShowing">
      <md-dialog-title>Preferences</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="addBoardFormShowing = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
    <div v-if="isBlank" class="board-tile board-tile--add" @click="addBoardFormShowing = true">
      <p class="md-body-2">
        <span>Create new board...</span>
      </p>
    </div>
    <div v-else class="board-tile">
      asdasd
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrelloBoardTile',
  props: [
    'isBlank'
  ],
  data () {
    return {
      addBoardFormShowing: false
    }
  },
  methods: {
    showAddBoard () {
      console.log(this)
    }
  }
}
</script>

<style lang="scss" scoped>
.board-section {
  width: 23.5%;
  padding: 0;
  margin: 0 2% 8px 0;
  transform: translate(0);
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
}
.board-tile {
  background-color: #97a7b0;
  background-size: cover;
  background-position: 50%;
  color: #fff;
  line-height: 20px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  border-radius: 3px;
  display: block;
  &.board-tile--add {
    background-color: rgba(9,45,66,.08);
    color: #6b808c;
    display: table-cell;
    height: 80px;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    width: inherit;
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
  }
}
</style>
