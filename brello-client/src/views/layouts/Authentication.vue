<template>
  <div class="layouts-authentication">
    <md-views :withPadding="false" />
  </div>
</template>

<script>
export default {
  name: 'LayoutsAuthentication'
}
</script>

<style lang="scss" scoped>
.layouts-authentication {
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

</style>
