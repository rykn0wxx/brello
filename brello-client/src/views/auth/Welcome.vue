<template>
  <div class="wrapper flex flex-col items-center justify-center h-screen">
    <div class="container-main relative overflow-hidden" :class="{'right-panel-active': showRight}">

      <!-- Each sign-up and sign-in will have container form -->
      <div class="container-form sign-up">
        <form @submit.prevent="validateUser('sign-up')" novalidate ref="form" class="app-form flex flex-col items-center justify-center h-full text-center">
          <h3 class="md-title">Create Account</h3>
          <div class="container-social">
            <div class="social inline-flex justify-center items-center rounded-full border-solid border"><md-icon>dashboard</md-icon></div>
            <div class="social inline-flex justify-center items-center rounded-full border-solid border"><md-icon>home</md-icon></div>
            <div class="social inline-flex justify-center items-center rounded-full border-solid border"><md-icon>shield</md-icon></div>
          </div>
          <span class="md-caption">Create your account and enjoy</span>
          <md-field md-inline class="app-form__field" :class="getValidationClass('register', 'email')">
            <label class="app-form__label" for="register.email">Email</label>
            <md-input class="app-form__control" v-model="register.email" id="register.email" name="email" type="email" autocomplete="off" autofocus="true" required />
          </md-field>
          <md-field md-inline class="app-form__field" :class="getValidationClass('register', 'username')">
            <label class="app-form__label" for="register.username">Username</label>
            <md-input class="app-form__control" v-model="register.username" id="register.username" name="username" type="text" autocomplete="off" autofocus="true" required />
          </md-field>
          <md-field md-inline class="app-form__field" :class="getValidationClass('register', 'password')">
            <label class="app-form__label" for="register.password">Password</label>
            <md-input class="app-form__control" v-model="register.password" id="register.password" name="password" type="password" autocomplete="off" autofocus="true" required />
          </md-field>
          <md-field md-inline class="app-form__field" :class="getValidationClass('register', 'password_confirmation')">
            <label class="app-form__label" for="register.password_confirmation">Password Confirmation</label>
            <md-input class="app-form__control" v-model="register.password_confirmation" id="register.password_confirmation" name="password_confirmation" type="password" autocomplete="off" autofocus="true" required />
          </md-field>
          <md-button type="submit" class="md-raised mt-8 app-form__btn" :disabled="sending">Register</md-button>
        </form>
      </div>

      <div class="container-form sign-in">
        <form @submit.prevent="validateUser('sign-in')" novalidate ref="form" class="app-form flex flex-col items-center justify-center h-full text-center">
          <h3 class="md-title">Sign In</h3>
          <div class="container-social">
            <div class="social inline-flex justify-center items-center rounded-full border-solid border"><md-icon>dashboard</md-icon></div>
            <div class="social inline-flex justify-center items-center rounded-full border-solid border"><md-icon>home</md-icon></div>
            <div class="social inline-flex justify-center items-center rounded-full border-solid border"><md-icon>shield</md-icon></div>
          </div>
          <span class="md-caption">Sign in to start your session</span>

          <md-field md-inline class="app-form__field" :class="getValidationClass('user', 'email')">
            <label for="email" class="app-form__label">Email</label>
            <md-input class="app-form__control" v-model="user.email" id="email" name="email" type="text" autocomplete="off" autofocus="true" required />
          </md-field>

          <md-field md-inline class="app-form__field" :class="getValidationClass('user', 'password')">
            <label for="password" class="app-form__label">Password</label>
            <md-input class="app-form__control" v-model="user.password" id="password" name="password" type="password" autocomplete="off" autofocus="false" required />
          </md-field>

          <md-button type="submit" class="md-raised mt-8 app-form__btn" :disabled="sending">Login</md-button>
        </form>
      </div>

      <!-- Each sign-up and sign-in will have overlay panel -->
      <div class="container-overlay absolute top-0 left-1/2 w-1/2 h-full overflow-hidden">
        <div class="overlay relative h-full">
          <div class="overlay-panel left absolute flex flex-col items-center justify-center text-center top-0 h-full w-1/2">
            <h3 class="md-title">Welcome Back!</h3>
            <p>To keep connected with us please login with your personal info</p>
            <md-button class="ghost md-raised mt-8 app-form__btn" @click.prevent="showRight = false">Sign In</md-button>
          </div>
          <div class="overlay-panel right absolute flex flex-col items-center justify-center text-center top-0 h-full w-1/2">
            <h3 class="md-title">Hello Friend</h3>
            <p>Enter your personal details and start journey with us</p>
            <md-button class="ghost md-raised mt-8 app-form__btn" @click.prevent="showRight = true">Sign Up</md-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { sameAs, email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'AuthWelcome',
  mixins: [ validationMixin ],
  data () {
    return {
      showRight: false,
      sending: false,
      user: {
        email: 'me@me.com',
        password: 'me'
      },
      register: {
        email: 'me@me.com',
        password: 'me',
        username: 'me',
        password_confirmation: 'me'
      }
    }
  },
  validations: {
    user: {
      email: {
        required,
        email,
        minLength: minLength(1)
      },
      password: {
        required,
        minLength: minLength(2)
      }
    },
    register: {
      email: {
        required,
        email,
        minLength: minLength(1)
      },
      username: {
        required,
        minLength: minLength(2)
      },
      password: {
        required,
        minLength: minLength(2)
      },
      password_confirmation: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    getValidationClass (fldRoot, fldName) {
      const field = this.$v[fldRoot][fldName]
      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    validateUser (formMode) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        if (formMode === 'sign-in') {
          this.loginUser()
        } else {
          this.registerUser()
        }
        this.sending = true
      }
    },
    async registerUser () {
      try {
        await this.$store.dispatch('user/registerUser', this.register)
        this.sending = false
        this.$router.push('/')
      } catch (error) {
        this.$store.dispatch('setError', 'Error logging in your credentials, please try again')
        this.sending = false
      }
    },
    async loginUser () {
      try {
        await this.$store.dispatch('user/logInUser', this.user)
        this.sending = false
        this.$router.push('/')
      } catch (error) {
        this.$store.dispatch('setError', 'Error logging in your credentials, please try again')
        this.sending = false
      }
    },
    doNothing () {
      console.log(this.$v['register']['email'])
    }
  }
}
</script>

<style lang="scss" scoped>
$overlay1: #FF5722;
$overlay2: #D84315;
$base-trans: all 0.6s ease-in-out;
.wrapper {
  background-color: #353846;
}
.container-main {
  background-color: #2f323e;
}
.container {
  &-main {
    border-radius: 1rem;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: 768px;
    max-width: 100%;
    min-height: 480px;
  }
  &-form {
    position: absolute;
    top: 0;
    height: 100%;
    transition: $base-trans;
    &.sign-in {
      left: 0;
      width: 50%;
      z-index: 2;
    }
    &.sign-up {
      left: 0;
      width: 50%;
      opacity: 0;
      z-index: 1;
    }
  }
  &-social {
    margin: 20px 0;
    .social {
      border-color: rgba(#b2b9bf, 0.22);
      font-size: 1.4rem;
      margin: 0 5px;
      height: 40px;
      width: 40px;
    }
    .md-icon {
      width: 14px;
      min-width: 14px;
      height: 14px;
      font-size: 14px !important;
    }
  }
  &-overlay {
    transition: $base-trans;
    z-index: 100;
    .overlay {
      color: rgba(250, 250, 250, 0.87);
      background: $overlay1;
      background: linear-gradient(to-right, $overlay1, $overlay1);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 0 0;
      left: -100%;
      width: 200%;
      transform: translateX(0);
      transition: $base-trans;
    }
  }
}
.overlay-panel {
  padding: 0 40px;
  transform: translateX(0);
  transition: $base-trans;
  .md-title {
    font-size: 3.2rem;
  }
  p {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  &.right {
    right: 0;
    transform: translateX(0);
  }
  &.left {
    transform: translateX(-20%);
  }
}
.app-form {
  padding: 0 50px;
  background-color: #2f323e;
  &__field {
    margin-bottom: 4px;
    &.md-has-value {
      .app-form__control {
        background-color: hsla(0,0%,100%,.08);
      }
    }
  }
  &__label {
    left: 10px;
  }
  &__control {
    padding-left: 10px;
    background-color: hsla(0,0%,100%,.12);
    &:focus, &:active {
      outline: none;
      background-color: hsla(0,0%,100%,.02);
    }
  }
  &__btn {
    background-color: $overlay1 !important;
    border: 1px solid $overlay1 !important;
    border-radius: 20px;
    box-shadow: none !important;
    padding: 12px 45px;
    letter-spacing: 1px;
    height: 42px;
    &:focus, &:active {
      outline: none;
    }
    &:active {
      transform: scale(0.95);
    }
    &.ghost {
      background-color: transparent !important;
      border-color: rgba(#fafafa, 0.87) !important;
    }
  }
}
.container-main {
  &.right-panel-active {
    .sign-in {
      transform: translateX(100%);
    }
    .sign-up {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      // animation-duration: 0.5s;
      // animation-fill-mode: both;
      // animation-name: showAnim;
      animation: showAnim 0.6s;
    }
    .container-overlay {
      transform: translateX(-100%);
    }
    .overlay {
      transform: translateX(50%);
    }
    .left {
      transform: translateX(0);
    }
    .right {
      transform: translateX(20%);
    }
  }
}

@keyframes showAnim {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}
</style>
