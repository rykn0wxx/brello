<template>
  <div class="register base-container container">
    <div class="layout-column layout-align-center-center">
      <form class="login-form" novalidate ref="form" @submit.prevent="validateUser">
        <core-card class="login-form__card">
          <template v-slot:cardHeader>
            <router-link class="login-form__logo" to="/">
              <core-anon-logo />
            </router-link>
          </template>
          <template v-slot:cardSubhead>
            <small class="text-white">Create your account and enjoy</small>
          </template>
          <template v-slot:cardContent>
            <md-field :class="getValidationClass('email')">
              <md-icon>email</md-icon>
              <label for="email">Email</label>
              <md-input v-model="user.email" id="email" name="email" type="email" autocomplete="off" autofocus="true" required />
            </md-field>
            <md-field :class="getValidationClass('username')">
              <md-icon>person</md-icon>
              <label for="username">Username</label>
              <md-input v-model="user.username" id="username" name="username" type="text" autocomplete="off" autofocus="false" required />
            </md-field>
            <md-field :class="getValidationClass('password')">
              <md-icon>lock</md-icon>
              <label for="password">Password</label>
              <md-input v-model="user.password" id="password" name="password" type="password" autocomplete="off" autofocus="false" required />
            </md-field>
            <md-field :class="getValidationClass('password_confirmation')">
              <md-icon>lock_outline</md-icon>
              <label for="password_confirmation">Password Confirmation</label>
              <md-input v-model="user.password_confirmation" id="password_confirmation" name="password_confirmation" type="password" autocomplete="off" autofocus="false" required />
            </md-field>
          </template>
          <template v-slot:cardAction>
            <md-button class="md-primary" type="submit" :disabled="sending">Register</md-button>
          </template>
        </core-card>
      </form>
      <div class="base-footer">
        <h6 class="md-caption">
          Already have an account? <router-link to="/login" class="auth-link">Sign in</router-link>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { sameAs, email, required, minLength } from 'vuelidate/lib/validators'
import Services from '@/services'

export default {
  name: 'Register',
  mixins: [ validationMixin ],
  data () {
    return {
      user: {
        email: 'me@me.com',
        username: 'me',
        password: 'me',
        password_confirmation: 'me'
      },
      sending: false
    }
  },
  validations: {
    user: {
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
    getValidationClass (fldName) {
      const field = this.$v.user[fldName]
      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    validateUser () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.registerUser()
        this.sending = true
      }
    },
    async registerUser () {
      try {
        const userObj = await Services.AuthenticationService.register({
          user: {
            ...this.user
          }
        })
        this.$store.dispatch('user/setUser', userObj.data)
        this.getToken()
      } catch (error) {
        this.$store.dispatch('setError', error.response.data)
        this.user = {
          email: null,
          username: null,
          password: null,
          password_confirmation: null
        }
        this.sending = false
      }
    },
    async getToken () {
      try {
        const userToken = await Services.AuthenticationService.login({
          auth: {
            email: this.user.email,
            password: this.user.password
          }
        })
        this.$store.dispatch('user/setToken', userToken.data.jwt)
        this.sending = false
        this.$router.push('/')
      } catch (error) {
        this.$store.dispatch('setError', error.response.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base {
  &-container {
    padding-top: 10vh;
    z-index: 2;
    position: relative;
    .md-caption {
      margin-top: 0;
    }
  }
}
.register {
  .base-footer, .login-form {
    width: 400px;
  }
  .login-form {
    &__logo {
      display: block;
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
  .auth-link {
    text-decoration: none;
  }
}
</style>
