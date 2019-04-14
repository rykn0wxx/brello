<template>
  <div class="boards layout-row layout-padding layout-wrap layout-fill" v-cloak>
    <md-dialog :md-active.sync="showAddForm">
      <md-dialog-title>Preferences</md-dialog-title>
      <md-dialog-content>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eligendi similique voluptatum culpa corrupti assumenda quaerat ab facere laudantium impedit, sint delectus magni ut. Exercitationem velit repellendus impedit et animi.
        </p>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showAddForm = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
    <div class="boards-section md-whiteframes padded layout-row md-whiteframe-4 flex-sm-45 flex-gt-sm-35 flex-gt-md-25 layout-align-center-center">
      <a href="#" class="boards-tile">
        <span class="boards-tile--fade"></span>
        <div class="boards-tile--details">
          <div class="boards-tile--details__title">
            <h4 class="md-body-2">Global KPI</h4>
          </div>
        </div>
      </a>
    </div>
    <div @click="showAddForm = true" class="md-whiteframes add-new-board padded layout-row md-whiteframe-4 flex-sm-45 flex-gt-sm-35 flex-gt-md-25 layout-align-center-center">
      <span>md-whiteframe-4</span>
    </div>
  </div>
</template>

<script>
import Services from '@/services'

export default {
  name: 'Boards',
  data () {
    return {
      boards: null,
      showAddForm: false
    }
  },
  methods: {
    showAddBoardForm () {
      this.showAddForm = true
      console.log('this.showAddForm = true')
    }
  },
  async created () {
    try {
      const allBoards = await Services.Api.secured().get('/boards')
      this.boards = allBoards.data
    } catch (error) {
      this.$store.dispatch('setError', error.response.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.boards {
  .padded {
    margin: 30px;
    height: 100px;
    @media (max-width: 599px) {
      margin: 7px;
      height: 50px;
    }
    @media (min-width: 600px) and (max-width: 959px) {
      margin: 20px;
      height: 75px;
    }
    @media (min-width: 960px) and (max-width: 1279px) {
      margin: 20px;
      height: 90px;
    }
    @media (min-width: 1280px) {
      margin: 25px;
      height: 100px;
    }
    &.add-new-board {
      cursor: pointer;
      background-color: rgba(#e6e9ea, 0.92);
      color: #6b808c;
      transition-property: background-color, border-color, box-shadow, color;
      transition-duration: 200ms;
      transition-timing-function: ease-out;
      &:hover {
        background-color: rgba(#d9dfe2, 0.87);
        color: #17394d;
      }
    }
  }
  &-section {
    position: relative;
    background-color: rgb(0, 121, 191);
    .boards-tile {
      color: rgba(#fafafa, 0.87);
      text-decoration: none;
      &:hover {
        color: rgba(#fff, 0.87);
      }
    }
  }
  &-tile {
    display: block;
    min-height: 100%;
    min-width: 100%;
    &--fade {
      background-color: rgba(0,0,0,.15);
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: all 300ms ease-in-out;
    }
    &--details {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: space-between;
    }
    &:hover {
      .boards-tile--fade {
        background-color: rgba(0,0,0,.25);
      }
    }
  }
}
</style>
