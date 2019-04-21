<template>
  <div class="board px-2 relative text-gray-900">
    <draggable :list="allLists" class="flex flex-wrap -mx-2" @change="log" v-if="isToShow">
      <div v-for="(list, index) in allLists" :key="index" class="list-wrapper h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500 mx-2">
        <div class="list-content flex flex-col h-full relative whitespace-normal">
          <div class="list-header relative pr-12">
            <h2 class="list-header-name md-body-2">{{ list.name }}</h2>
          </div>
          <div class="list-cards">
            <a v-for="(card, index) in list.cards" :key="index" href="#" class="list-card block no-underline">
              <div class="list-card-details">
                <span class="list-card__title">{{ card.name }}</span>
              </div>
            </a>
          </div>
          <a href="#" class="list-action no-underline hover:no-underline flex items-center relative select-none">
            <span class="list-action__icon"><i class="material-icons">add</i></span>
            <span class="list-action__text">Add another card</span>
          </a>
        </div>
      </div>
    </draggable>
    <trello-board-tile :boardLists="allLists" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import draggable from 'vuedraggable'

export default {
  name: 'BoardsBoard',
  components: { draggable },
  data () {
    return {
      isToShow: false
    }
  },
  computed: {
    ...mapGetters({
      allLists: 'lists/allLists'
    })
  },
  created () {
    this.getAllLists(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      getAllLists: 'lists/getAllLists'
    }),
    log (evt) {
      console.log(evt)
    }
  }
}
</script>

<style lang="scss">
.board {
  // font-size: 1.4rem;
  .list {
    &-wrapper {
      width: 272px;
      cursor: move;
    }
    &-content {
      background-color: #dfe3e6;
      border-radius: 3px;
    }
    &-header {
      border-radius: 3px 3px 0 0;
      flex: 0 0 auto;
      padding: 10px 8px 8px;
      min-height: 20px;
      &-name {
        margin: 0;
      }
    }
    &-cards {
      flex: 1 1 auto;
      margin-bottom: 0;
      overflow-y: auto;
      overflow-x: hidden;
      margin: 0 4px;
      padding: 0 4px;
      z-index: 1;
      min-height: 0;
    }
    &-action {
      border-radius: 0 0 3px 3px;
      flex: 0 0 auto;
      padding: 8px;
      font-size: 1.4rem;
      color: #6b808c;
      span {
        display: inline-flex;
      }
      &__icon {
        .material-icons {
          color: #798d99;
          font-size: 14px;
          line-height: 20px;
          height: 20px;
          width: 20px;
          font-weight: 400;
          text-align: center;
        }
      }
      &:hover {
        background-color: rgba(9,45,66,.13);
        color: darken(#6b808c, 20%);
        .material-icons {
          color: darken(#798d99, 20%);
        }
      }
    }
    &-card {
      background-color: #fafafa;
      border-radius: 3px;
      box-shadow: 0 1px 0 rgba(9,45,66,.25);
      cursor: pointer;
      margin-bottom: 8px;
      max-width: 300px;
      min-height: 20px;
      position: relative;
      text-decoration: none;
      z-index: 0;
      &-details {
        overflow: hidden;
        padding: 6px 8px 2px;
        position: relative;
        z-index: 10;
      }
      &__title {
        clear: both;
        display: block;
        margin: 0 0 4px;
        overflow: hidden;
        text-decoration: none;
        word-wrap: break-word;
        color: #17394d;
      }
    }
  }
}
</style>
