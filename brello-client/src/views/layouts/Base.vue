<template>
  <div class="layouts-base">
    <md-views />
  </div>
</template>

<script>
export default {
  name: 'LayoutsBase',
  data () {
    return {
      imgLogo: require('@/assets/logo.svg'),
      imgBg: require('@/assets/login-bg.jpg')
    }
  },
  computed: {
    headerImage () {
      return {
        // backgroundImage: `url(${this.imgBg})`
        background: `url(${this.imgBg}) no-repeat center center fixed`,
        backgroundSize: 'cover'
        // backgroundImage: `url(${this.headerImg})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// background: url(../../assets/login-bg.jpg) no-repeat center center fixed;
.layouts-base {
  min-height: 100vh;
  height: auto;
  display: inherit;
  background: url(../../assets/login-bg.jpg) no-repeat center center fixed;
  background-size: cover;
  &::after, &::before {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
    content: '';
  }
  &::before {
    background: rgba(0, 0, 0, 0.5);
  }
}
.base {
  &-container {
    padding-top: 23vh;
    z-index: 2;
    position: relative;
    .md-caption {
      margin-top: 0;
    }
  }
}
.base-footer, .login-form {
  width: 400px;
}
.login-form {
  &__logo {
    text-align: center;
    > svg {
      height: 48px;
      width: auto;
      fill: rgba(0, 0, 0, 0.7);
    }
  }
  &__card {
    background-color: rgba(#2f323e, 0.5);
    color: #b2b9bf;
    width: 100%;
    margin-bottom: 0;
    &-header {
      background-color: rgba(#4c5667, 0.5);
    }
  }
}
</style>
