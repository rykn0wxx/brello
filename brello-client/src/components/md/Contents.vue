<template>
  <div class="md-contents">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MdContents'
}
</script>

<style lang="scss" scoped>
.md-contents {
  display: block;
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  &.md-scroll-y {
    overflow-y: auto;
    overflow-x: hidden;
  }
  &.md-scroll-x {
    overflow-x: auto;
    overflow-y: hidden;
  }
  &.md-scroll-xy {
  }
  @media print {
    overflow: visible !important;
  }
}
</style>
