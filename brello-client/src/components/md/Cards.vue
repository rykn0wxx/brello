<template>
  <div class="md-card">
    <slot>
      <div class="md-card-header">
        <div class="md-card-avatar">
          <div class="md-icon">
            <i class="material-icons">menu</i>
          </div>
        </div>
        <div class="md-card-header-text">
          <span class="md-title">Title</span>
          <span class="md-subhead">Subhead</span>
        </div>
      </div>
      <div class="md-card-title">
        <div class="md-card-title-text">
          <span class="headline">headline</span>
        </div>
      </div>
      <div class="md-card-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non perspiciatis magnam saepe, eaque perferendis laborum dolores optio ipsum itaque? Earum tenetur cum, libero blanditiis rem laborum laudantium id aut!</p>
      </div>
      <div class="md-card-actions layout-row layout-align-start-center">
        <md-button>Action1</md-button>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'MdCard'
}
</script>

<style lang="scss" scoped>
@import '../../sass/colors';
@import '../../sass/variables';
@import '../../sass/mixins';
$card-padding: 16px;
$card-box-shadow: $whiteframe-shadow-1dp;
$card-border-radius: 2px;
.md-card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: $baseline-grid;
  box-shadow: $card-box-shadow;
  color: rgba(0,0,0,0.87);
  background-color: rgb(255,255,255);
  border-radius: $card-border-radius;
  .md-card-header {
    padding: $card-padding;
    display: flex;
    flex-direction: row;
    &:first-child {
      .md-card-avatar {
        @include rtl-prop(margin-right, margin-left, 12px, auto);
      }
    }
    &:last-child {
      .md-card-avatar {
        @include rtl-prop(margin-left, margin-right, 12px, auto);
      }
    }
    .md-card-avatar {
      width: 40px;
      height: 40px;
      .md-user-avatar, .md-icon{
        border-radius: 50%;
        color: rgb(250,250,250);
        background-color: rgba(0,0,0,0.38);
      }
      .md-icon {
        padding: 8px;
        > svg {
          height: inherit;
          width: inherit;
        }
      }
      & + .md-card-header-text {
        max-height: 40px;
        .md-title {
          font-size: 14px;
        }
      }
    }
    .md-card-header-text {
      display: flex;
      flex: 1;
      flex-direction: column;
      .md-subhead {
        font-size: 14px;
      }
    }
  }
  .md-card-title {
    padding: 3 * $card-padding / 2 $card-padding $card-padding;
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    & + .md-card-content {
      padding-top: 0;
    }
    .md-card-title-text {
      flex: 1;
      flex-direction: column;
      display: flex;
      .md-subhead {
        padding-top: 0;
        font-size: 14px;
      }
      &:only-child {
        .md-subhead {
          padding-top: 3 * $card-padding / 4;
        }
      }
    }
    .md-card-title-media {
      margin-top: - $card-padding / 2;
      .md-media-sm {
        height: 80px;
        width: 80px;
      }
      .md-media-md {
        height: 112px;
        width: 112px;
      }
      .md-media-lg {
        height: 152px;
        width: 152px;
      }
    }
  }
  .md-card-content {
    display: block;
    padding: $card-padding;

    & > p {
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    .md-media-xl {
      height: 240px;
      width: 240px;
    }
  }
  .md-actions, .md-card-actions {
    margin: $baseline-grid;
    &.layout-column {
      .md-button {
        &:not(.md-icon-button) {
          margin: $baseline-grid / 4 0;
          &:first-of-type {
            margin-top: 0;
          }
          &:last-of-type {
            margin-bottom: 0;
          }
        }
        &.md-icon-button {
          margin-top: 3 * $baseline-grid / 4;
          margin-bottom: 3 * $baseline-grid / 4;
        }
      }
    }
    .md-card-icon-actions {
      flex: 1;
      justify-content: flex-start;
      display: flex;
      flex-direction: row;
    }
    &:not(.layout-column) .md-button {
      &:not(.md-icon-button) {
        margin: 0 $baseline-grid * .5;
        &:first-of-type {
          @include rtl-prop(margin-left, margin-right, 0, auto);
        }
        &:last-of-type {
          @include rtl-prop(margin-right, margin-left, 0, auto);
        }
      }
      &.md-icon-button {
        margin-left: 3 * $baseline-grid / 4;
        margin-right: 3 * $baseline-grid / 4;
        &:first-of-type {
          @include rtl-prop(margin-left, margin-right, 3 * $baseline-grid / 2, auto);
        }
        &:last-of-type {
          @include rtl-prop(margin-right, margin-left, 3 * $baseline-grid / 2, auto);
        }
      }
      & + .md-card-icon-actions {
        flex: 1;
        justify-content: flex-end;
        display: flex;
        flex-direction: row;
      }
    }
  }
}
@each $color, $value in $theme-colors {
  .md-card.md-#{$color} {
    color: color-yiq(color($value));
    background-color: color($value);
    .md-card-header {
      .md-card-avatar {
        .md-icon {
          color: color($value);
          background-color: color-yiq(color($value), 0.5);
        }
      }

      .md-card-header-text {
        .md-subhead {
          color: color-yiq(color($value), 0.7);
        }
      }
    }
    .md-card-title {
      .md-card-title-text {
        &:not(:only-child) {
          .md-subhead {
            color: color-yiq(color($value), 0.7);
          }
        }
      }
    }
  }
}
</style>
