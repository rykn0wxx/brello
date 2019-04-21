<template>
  <draggable
    class="board-tile flex flex-wrap -mx-2"
    :group="{ name: 'lists', put: false }"
    v-model="lists"
    ghost-class="board-tile__ghost"
    @end="listMoved"
    @start="listStart">
    <trello-board-card v-for="(list, index) in lists" :key="index" :list="list" />
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import Services from '@/services'

export default {
  name: 'TrelloBoardTile',
  components: { draggable },
  props: [ 'boardLists' ],
  data () {
    return {
      lists: this.boardLists,
      drag: false
    }
  },
  methods: {
    async listMoved (evt) {
      if (evt.oldIndex !== evt.newIndex) {
        const listData = new FormData()
        const listId = this.lists[evt.newIndex]
        listData.append('list[position]', evt.newIndex + 1)
        await Services.Api.secured().patch(`/boards/${this.$route.params.id}/lists/${listId.id}/move`, listData)
      }
      this.drag = false
    },
    listStart (evt) {
      this.drag = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
