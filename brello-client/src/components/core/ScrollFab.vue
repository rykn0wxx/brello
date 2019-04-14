<template>
  <md-button class="md-fab md-fab-bottom-right core-scroll-fab" @click="scrollTop">
    <md-icon>expand_less</md-icon>
  </md-button>
</template>

<script>
export default {
  name: 'CoreScrollFab',
  props: {
    scrollElemSelector: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isScrolling: false,
      newState: false
    }
  },
  mounted () {
    const scrollElem = document.querySelector(this.scrollElemSelector)
    scrollElem.addEventListener('scroll', this.updateState)
    this.updateState()
  },
  methods: {
    scrollTop () {
      const parentElem = document.querySelector(this.scrollElemSelector)
      parentElem.scrollTop = 0
    },
    updateState () {
      const parentElem = document.querySelector(this.scrollElemSelector)
      this.newState = parentElem.scrollTop !== 0
      if (this.newState !== this.isScrolling) {
        this.$el.classList.toggle('scrolling', this.newState)
      }
      this.isScrolling = this.newState
    }
  }
}
</script>

<style lang="scss" scoped>
.core-scroll-fab {
  position: fixed !important;
  transform: scale(0);
  transition: transform 0.2s;
  &.scrolling {
    transform: scale(1);
  }
}
</style>
