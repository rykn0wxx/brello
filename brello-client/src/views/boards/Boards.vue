<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-25 md-medium-size-50 md-small-size-50 md-xsmall-size-100" v-for="(board, index) in boards" v-bind:key="index">
      <router-link v-bind:to="`/boards/${board.id}`" class="no-underline hover:no-underline">
        <md-card md-with-hover class="board-card">
          <md-card-header>
            <md-card-header-text>
              <div class="md-body-2">{{ board.name }}</div>
            </md-card-header-text>
          </md-card-header>
        </md-card>
      </router-link>
    </div>
    <div class="md-layout-item md-size-25 md-medium-size-50 md-small-size-50 md-xsmall-size-100" @click="showForm = true">
      <md-card md-with-hover class="board-card board-card__add">
        <md-card-header>
          <md-card-header-text>
            <div class="md-body-2">Green custom theme</div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
    </div>
    <md-dialog :md-active.sync="showForm">
      <md-dialog-content>
        <md-dialog-title>Add New Board</md-dialog-title>
        <form novalidate ref="form" @submit.prevent="validateForm">
          <md-field :class="getValidationClass('name')">
            <label for="name">Name</label>
            <md-input v-model="board.name" id="name" name="name" type="text" autocomplete="off" autofocus="true" required />
          </md-field>
          <md-button class="md-primary" type="submit" :disabled="sending">Create Board</md-button>
        </form>
      </md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'BoardsBoards',
  mixins: [ validationMixin ],
  data () {
    return {
      showForm: false,
      sending: false,
      board: {
        name: null
      }
    }
  },
  validations: {
    board: {
      name: {
        required
      }
    }
  },
  computed: {
    ...mapGetters({
      boards: 'boards/allBoards'
    })
  },
  created () {
    this.getAllBoards()
  },
  methods: {
    ...mapActions({
      getAllBoards: 'boards/getAllBoards',
      createBoard: 'boards/createBoard'
    }),
    gotoBoard () {

    },
    getValidationClass (fldName) {
      const field = this.$v.board[fldName]
      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    newBoard () {
      const payload = {
        ...this.board,
        user_id: this.$store.getters['user/getUser'].id
      }
      this.createBoard(payload)
      this.showForm = false
      this.sending = false
    },
    validateForm () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.newBoard()
        this.sending = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables";
@import "~vue-material/dist/theme/engine";

.md-layout-item {
  min-height: 40px;
  margin-top: 8px;
  margin-bottom: 8px;
  transition: .3s $md-transition-stand-timing;
}

.board-card {
  height: 80px;
  &__add {
    background-color: #7D7F86;
    color: #494C56;
    &:hover {
      background-color: #97999F;
      color: #2F323E;
    }
  }
}
</style>
