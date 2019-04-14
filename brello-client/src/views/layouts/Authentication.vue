<template>
  <div class="authentication">
    <div class="page-header__image" :style="headerImage">
      <md-contents class="page-content md-scroll-y">
        <div class="page-container container layout-row layout-align-center-stretch">
          <core-view />
        </div>
      </md-contents>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutsAuthentication',
  data () {
    return {
      headerImg: require('@/assets/login-bg.jpg')
    }
  },
  computed: {
    headerImage () {
      return {
        background: `url(${this.headerImg}) no-repeat 50% 50% fixed`
        // background: `url(${this.headerImg}) no-repeat center center`
        // backgroundImage: `url(${this.headerImg})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.authentication {
  min-height: 100%;
  max-height: 100%;
  height: 100%;
  box-sizing: border-box;
}
.page {
  &-header__image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover !important;
    height: 100%;
  }
  &-content {
    padding-top: 5%;
  }
  &-container {
    position: relative;
    height: 100%;
    text-align: center;
    &.container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      @media (min-width: 576px) {
        max-width: 720px;
      }
      @media (min-width: 992px) {
        max-width: 960px;
      }
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
    }
  }
}
</style>
