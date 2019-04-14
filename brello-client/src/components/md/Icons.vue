<template>
  <i class="md-icon material-icons">{{ iconName }}</i>
</template>

<script>
export default {
  name: 'MdIcon',
  props: [
    'iconName'
  ]
}
</script>

<style lang="scss">
@import '../../sass/colors';
@import '../../sass/variables';
.md-icon {
  color: rgba(0,0,0,0.54);
  margin: auto;
  background-repeat: no-repeat no-repeat;
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
  height: $icon-size;
  width: $icon-size;
  min-height: $icon-size;
  min-width: $icon-size;

  svg {
    pointer-events: none;
    display: block;
  }

  &.md-font-icon {
    line-height: $icon-size;
    width: auto;
  }
}
@each $color, $value in $theme-colors {
  .md-icon.md-#{$color} {
    color: color($value);
  }
}
</style>
