<template>
  <transition>
    <button class="md-button" v-bind="$attrs" @click="btnClick" @blur="btnBlur" @keyup="btnKeyup">
      <slot />
    </button>
  </transition>
</template>

<script>
export default {
  name: 'MdButton',
  inheritAttrs: false,
  methods: {
    btnClick (e) {
      if (this.$el.disabled) {
        e.preventDefault()
        e.stopImmediatePropagation()
      }
      console.log(e)
    },
    btnBlur () {
      this.$el.classList.remove('md-focused')
    },
    btnKeyup (e) {
      this.$el.classList.add('md-focused')
    }
  },
  mounted: function () {
    this.$root.$attachWave(this.$el)
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/colors';
@import '../../sass/variables';
@import '../../sass/mixins';
$button-border-radius: 2px;
$button-fab-border-radius: 50%;
$button-icon-border-radius: $button-fab-border-radius;

$button-font-size: $body-font-size-base;
$button-font-size-dense: $body-font-size-base * 13/14;

$button-line-height: rem(3.60);
$button-line-height-dense: rem(3.20);
$button-margin: rem(0.600) rem(0.800);
$button-min-width: rem(8.800);
$button-padding: 0 $button-left-right-padding;

// Fab buttons
$button-fab-line-height: rem(5.600);
$button-fab-mini-width: rem(4.00);
$button-fab-mini-height: rem(4.00);
$button-fab-mini-line-height: rem(4.00);

$button-fab-toast-offset: $button-fab-height * 0.75;

$icon-button-height: rem(4.000);
$icon-button-width: rem(4.000);
$icon-button-margin: rem(0.600);

button.md-button::-moz-focus-inner {
  border: 0;
}
.md-button {
  display: inline-block;
  position: relative;
  cursor: pointer;

  @include dense(min-height, $button-line-height, $button-line-height-dense);
  min-width: $button-min-width;
  @include dense(line-height, $button-line-height, $button-line-height-dense);

  vertical-align: middle;
  align-items: center;
  text-align: center;

  border-radius: $button-border-radius;
  box-sizing: border-box;

  user-select: none;
  outline: none;
  border: 0;

  padding: $button-padding;
  margin: $button-margin;

  background: transparent;
  color: currentColor;
  white-space: nowrap;

  text-transform: uppercase;
  font-weight: 500;
  @include dense(font-size, $button-font-size, $button-font-size-dense);
  font-style: inherit;
  font-variant: inherit;
  font-family: inherit;
  text-decoration: none;

  overflow: hidden;

  transition: box-shadow $swift-ease-out-duration $swift-ease-out-timing-function,
              background-color $swift-ease-out-duration $swift-ease-out-timing-function;
  &:focus {
    outline: none;
  }
  &:hover, &:focus {
    text-decoration: none;
  }
  &.v-leave {
    transition: none;
  }
  &.md-cornered {
    border-radius: 0;
  }
  &.md-icon {
    padding: 0;
    background: none;
  }
  &.md-raised {
    &:not([disabled]) {
      @include md-shadow-bottom-z-1();
    }
  }
  &.md-icon-button {
    margin: 0 $icon-button-margin;
    height: $icon-button-height;
    min-width: 0;
    line-height: $icon-size;
    padding: $baseline-grid;
    width: $icon-button-width;
    border-radius: $button-icon-border-radius;
  }
  &.md-fab {

    @include fab-all-positions();
    z-index: $z-index-fab;
    line-height: $button-fab-line-height;
    min-width: 0;
    width: $button-fab-width;
    height: $button-fab-height;
    vertical-align: middle;
    @include md-shadow-bottom-z-1();
    border-radius: $button-fab-border-radius;
    background-clip: padding-box;
    overflow: hidden;
    transition: $swift-ease-in;
    transition-property: background-color, box-shadow, transform;
    &.md-mini {
      line-height: $button-fab-mini-line-height;
      width: $button-fab-mini-width;
      height: $button-fab-mini-height;
    }
    &.v-leave {
      transition: none;
    }
  }
  &:not([disabled]) {
    &.md-raised,
    &.md-fab {
      &.md-focused {
        @include md-shadow-bottom-z-1();
      }
      &:active {
        @include md-shadow-bottom-z-2();
      }
    }
  }
  .md-ripple-container, .waves-ripple {
    border-radius: inherit;
    background-clip: padding-box;
    overflow: hidden;

    transform:translateZ(0);
  }
}
.md-button.md-icon-button, button.md-button.md-fab {
  .md-icon {
    display: block;
  }
}
.md-button-group {
  display: flex;
  flex: 1;
  width: 100%;

  & > .md-button {
    flex: 1;

    display: block;

    overflow: hidden;

    width: 0;

    border-width: 1px 0px 1px 1px;
    border-radius: 0;

    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:first-child {
      border-radius: 2px 0px 0px 2px;
    }
    &:last-child {
      border-right-width: 1px;
      border-radius: 0px 2px 2px 0px;
    }
  }
}
@media screen and (-ms-high-contrast: active) {
  .md-button.md-raised, .md-button.md-fab {
    border: 1px solid #fff;
  }
}
.md-button {
  &:not([disabled]) {
    &:hover {
      background-color: color-opaq($background, 0.2);
    }
    &.md-focused {
      background-color: color-opaq($background, 0.2);
    }
    &.md-icon-button:hover {
      background-color: transparent;
    }
  }
  &.md-fab {
    background-color: color($accent);
    color: color-yiq(color($accent));
    md-icon {
      color: color-yiq(color($accent));
    }
    &:not([disabled]) {
      &:hover {
        background-color: color($accent + '-A700');
      }
      &.md-focused {
        background-color: color($accent + '-A700');
      }
    }
  }
  &.md-raised {
    color: color($background + '-900');
    background-color: color($background + '-50');
    &:not([disabled]) {
      .md-icon {
        color: color($background + '-900');
      }
      &:hover {
        background-color: color($background + '-100');
      }
      &.md-focused, &:focus {
        background-color: color($background + '-200');
      }
    }
  }
  &[disabled], &.md-raised[disabled], &.md-fab[disabled] {
    color: rgba(0,0,0,0.38);
    cursor: default;
    .md-icon {
      color: rgba(0,0,0,0.38);
    }
  }
  &.md-raised[disabled], &.md-fab[disabled] {
    background-color: rgba(0,0,0,0.12);
  }
  &[disabled] {
    background-color: transparent;
  }
}
@each $color, $value in $theme-colors {
  .md-button.md-#{$color} {
    color: color($value);
    &:hover {
      color: color($value + '-A700');
    }
    &.md-raised, &.md-fab {
      color: color-yiq(color($value));
      background-color: color($value);
      &:not([disabled]) {
        .md-icon {
          color: color-yiq(color($value));
        }
        &:hover, &:focus {
          background-color: color($value + '-600');
        }
        &.md-focused {
          background-color: color($value + '-600');
        }
      }
    }
  }
}
</style>
