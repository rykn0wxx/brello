<template>
  <div class="md-input-container">
    <label for="inp123">Title</label>
    <input v-bind="$attrs" class="md-input" id="inp123" @input="inputCheckValue" @focus="setFocused(true)" @blur="inputBlur" />
    <div class="md-errors-spacer"></div>
  </div>
</template>

<script>
export default {
  name: 'MdInput',
  inheritAttrs: false,
  methods: {
    setHasValue (hasValue) {
      this.$el.classList.toggle('md-input-has-value', hasValue)
    },
    setFocused (isFocused) {
      this.$el.classList.toggle('md-input-focused', isFocused)
    },
    inputBlur (event) {
      this.setFocused(false)
      this.inputCheckValue(event)
    },
    inputCheckValue (event) {
      this.setHasValue(event.target.value.length > 0 || (event.target.validity || {}).badInput)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/colors';
@import '../../sass/variables';
@import '../../sass/mixins';
$input-container-padding: 2px;

$input-label-default-offset: 24px;
$input-label-default-scale: 1.0;
$input-label-float-offset: 6px;
$input-label-float-scale: 0.75;
$input-label-float-width: $input-container-padding + 16px;

$input-placeholder-offset: $input-label-default-offset;

$input-border-width-default: 1px;
$input-border-width-focused: 2px;
$input-line-height: 26px;
$input-padding-top: 2px;

$input-error-font-size: 12px;
$input-error-height: 24px;
$input-error-line-height: $input-error-font-size + 2px;
$error-padding-top: ($input-error-height - $input-error-line-height) / 2;

$icon-offset: 36px;

$icon-top-offset: ($icon-offset - $input-padding-top - $input-border-width-focused) / 4;

$icon-float-focused-top: -8px;

$input-resize-handle-height: 10px;
$foreground-1: rgba(0,0,0,0.87);
$foreground-2: rgba(0,0,0,0.54);
$foreground-3: rgba(0,0,0,0.38);
$foreground-4: rgba(0,0,0,0.12);
.md-input-container {
  @include pie-clearfix();
  display: inline-block;
  position: relative;
  padding: $input-container-padding;
  margin: 18px 0;
  vertical-align: middle;
  &.md-block {
    display: block;
  }
  .md-errors-spacer {
    @include rtl(float, right, left);
    min-height: $input-error-height;
    min-width: 1px;
  }
  > .md-icon {
    position: absolute;
    top: $icon-top-offset;
    @include rtl(left, 2px, auto);
    @include rtl(right, auto, 2px);
  }
  textarea,
  input[type="text"],
  input[type="password"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="date"],
  input[type="month"],
  input[type="time"],
  input[type="week"],
  input[type="number"],
  input[type="email"],
  input[type="url"],
  input[type="search"],
  input[type="tel"],
  input[type="color"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
  input[type="date"],
  input[type="datetime-local"],
  input[type="month"],
  input[type="time"],
  input[type="week"] {
    min-height: $input-line-height;
  }
  textarea {
    resize: none;
    overflow: hidden;
    &.md-input {
      min-height: $input-line-height;
      -ms-flex-preferred-size: auto;
    }
    &.md-no-autogrow {
      height: auto;
      overflow: auto;
    }
  }
  label:not(.md-container-ignore) {
    position: absolute;
    bottom: 100%;
    @include rtl(left, 0, auto);
    @include rtl(right, auto, 0);
    &.md-required:after {
      content: ' *';
      font-size: 13px;
      vertical-align: top;
    }
  }
  label:not(.md-no-float):not(.md-container-ignore), .md-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    order: 1;
    pointer-events: none;
    -webkit-font-smoothing: antialiased;
    @include rtl(padding-left, $input-container-padding + 1px, 0);
    @include rtl(padding-right, 0, $input-container-padding + 1px);
    z-index: 1;
    transform: translate3d(0, $input-label-default-offset + 4, 0) scale($input-label-default-scale);
    transition: transform $swift-ease-out-duration $swift-ease-out-timing-function;
    max-width: 100%;
    @include rtl(transform-origin, left top, right top);
  }
  .md-placeholder {
    position: absolute;
    top: 0;
    opacity: 0;
    transition-property: opacity, transform;
    transform: translate3d(0, $input-placeholder-offset + $baseline-grid * 0.75, 0);
  }
  &.md-input-focused .md-placeholder {
    opacity: 1;
    transform: translate3d(0, $input-placeholder-offset, 0);
  }
  &.md-input-has-value .md-placeholder {
    transition: none;
    opacity: 0;
  }
  &:not( .md-input-has-value ):not( .md-input-has-placeholder ) input:not( :focus ) {
    color: transparent;
  }
  &:not( .md-input-has-value ) input:not( :focus )::-webkit-datetime-edit-ampm-field,
  &:not( .md-input-has-value ) input:not( :focus )::-webkit-datetime-edit-day-field,
  &:not( .md-input-has-value ) input:not( :focus )::-webkit-datetime-edit-hour-field,
  &:not( .md-input-has-value ) input:not( :focus )::-webkit-datetime-edit-millisecond-field,
  &:not( .md-input-has-value ) input:not( :focus )::-webkit-datetime-edit-minute-field,
  &:not( .md-input-has-value ) input:not( :focus )::-webkit-datetime-edit-month-field,
  &:not( .md-input-has-value ) input:not( :focus )::-webkit-datetime-edit-second-field,
  &:not( .md-input-has-value ) input:not( :focus )::-webkit-datetime-edit-week-field,
  &:not( .md-input-has-value ) input:not( :focus )::-webkit-datetime-edit-year-field,
  &:not( .md-input-has-value ) input:not( :focus )::-webkit-datetime-edit-text {
    color: transparent;
  }
  .md-input {
    order: 2;
    display: block;
    margin-top: 0;
    background: none;
    padding-top: $input-padding-top;
    padding-bottom: $input-border-width-focused - $input-border-width-default;
    padding-left: 2px;
    padding-right: 2px;
    border-width: 0 0 $input-border-width-default 0;
    line-height: $input-line-height;
    height: $input-line-height + ($input-padding-top * 2);
    -ms-flex-preferred-size: $input-line-height;
    border-radius: 0;
    border-style: solid;
    width: 100%;
    box-sizing: border-box;
    @include rtl(float, left, right);
    &:focus {
      outline: none;
    }
    &:invalid {
      outline: none;
      box-shadow: none;
    }
    &.md-no-flex {
      flex: none !important;
    }
  }
  .md-char-counter {
    @include rtl(text-align, right, left);
    @include rtl(padding-right, $input-container-padding, 0);
    @include rtl(padding-left, 0, $input-container-padding);
  }
  .md-char-counter {
    font-size: $input-error-font-size;
    line-height: $input-error-line-height;
    overflow: hidden;
    transition: $swift-ease-in;
    opacity: 1;
    margin-top: 0;
    padding-top: $error-padding-top;
    &:not(.md-char-counter) {
      @include rtl(padding-right, rem(0.5), 0);
      @include rtl(padding-left, 0, rem(0.5));
    }
  }
  &:not(.md-input-invalid) {
    .md-auto-hide {
      .md-input-message-animation {
        opacity: 0;
        margin-top: -100px;
      }
    }
  }
  &.md-input-focused, &.md-input-has-placeholder, &.md-input-has-value {
    label:not(.md-no-float) {
      transform: translate3d(0, $input-label-float-offset, 0) scale($input-label-float-scale);
      transition: transform $swift-ease-out-timing-function $swift-ease-out-duration,
                  width $swift-ease-out-timing-function $swift-ease-out-duration;
    }
  }
  &.md-input-has-value {
    label {
      transition: none;
    }
  }
  &.md-input-focused .md-input, .md-input.ng-invalid.ng-dirty, &.md-input-resized .md-input {
    padding-bottom: 0;
    border-width: 0 0 $input-border-width-focused 0;
  }
  .md-input {
    &[disabled], [disabled] & {
      background-position: bottom $input-border-width-default * -1 left 0;
      background-size: 4px 1px;
      background-repeat: repeat-x;
    }
  }
  &.md-icon-float {
    transition: margin-top $swift-ease-out-duration $swift-ease-out-timing-function;
    > label {
      pointer-events: none;
      position: absolute;
    }
    > .md-icon {
      top: $icon-top-offset;
      @include rtl(left, 2px, auto);
      @include rtl(right, auto, 2px);
    }

  }
  &.md-icon-left, &.md-icon-right {
    > label {
      &:not(.md-no-float):not(.md-container-ignore),
      .md-placeholder {
        width: calc(100% - #{$icon-offset} - #{$input-label-float-width});
      }
    }
  }
  &.md-icon-left {
    @include rtl(padding-left, $icon-offset, 0);
    @include rtl(padding-right, 0, $icon-offset);
    > label {
      @include rtl(left, $icon-offset, auto);
      @include rtl(right, auto, $icon-offset);
    }
  }
  &.md-icon-right {
    @include rtl(padding-left, 0, $icon-offset);
    @include rtl(padding-right, $icon-offset, 0);
    > .md-icon:last-of-type {
      margin: 0;
      @include rtl(right, 2px, auto);
      @include rtl(left, auto, 2px);
    }
  }
  &.md-icon-left.md-icon-right {
    padding-left: $icon-offset;
    padding-right: $icon-offset;
    > label {
      &:not(.md-no-float):not(.md-container-ignore),
      .md-placeholder {
        width: calc(100% - (#{$icon-offset} * 2));
      }
    }
  }
}
.md-input-container {
  .md-input {
    @include input-placeholder-color($foreground-3);
    color: $foreground-1;
    border-color: $foreground-4;
  }
  > .md-icon {
    color: $foreground-1;
  }

  label, .md-placeholder {
    color: $foreground-3;
  }

  label.md-required:after {
    color: color($warn + '-A700');
  }

  &:not(.md-input-focused):not(.md-input-invalid) label.md-required:after {
    color: $foreground-2;
  }

  &.md-input-focused {
    .md-input {
      @include input-placeholder-color($foreground-2);
    }
  }
  &:not(.md-input-invalid) {
    &.md-input-has-value {
      label {
        color: $foreground-2;
      }
    }
    &.md-input-focused,
    &.md-input-resized {
      .md-input {
        border-color: color($primary);
      }
    }

    &.md-input-focused {
      label,
      md-icon {
        color: color($primary);
      }
      &.md-accent {
        .md-input {
          border-color: color($accent);
        }
        label,
        md-icon {
          color: color($accent);
        }
      }
      &.md-warn {
        .md-input {
          border-color: color($warn + '-A700');
        }
        label,
        md-icon {
          color: color($warn + '-A700');
        }
      }
    }
  }
  &.md-input-invalid {
    .md-input {
      border-color: color($warn + '-A700');
    }
    label,
    .md-input-message-animation,
    .md-char-counter {
      color: color($warn + '-A700');
    }
  }
  .md-input {
    &[disabled],
    [disabled] & {
      border-bottom-color: transparent;
      color: $foreground-3;
      background-image: linear-gradient(to right, $foreground-3 0%, $foreground-3 33%, transparent 0%);
      background-image: -ms-linear-gradient(left, transparent 0%, $foreground-3 100%);
    }
  }
}
</style>
