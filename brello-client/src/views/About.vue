<template>
  <div class="about-wrapper">
    <div class="main-container" :class="{'right-panel-active': isShowRight}">
      <div class="form-container sign-up-container">
        <form class="sliding-form">
          <h1 class="md-body-2">Create an account</h1>
          <div class="social-container">
            <span class="social-img">
              <ImgColours />
            </span>
            <span class="social-img">
              <ImgHairCross />
            </span>
            <span class="social-img">
              <ImgShareable />
            </span>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel">
            sads
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      isShowRight: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
