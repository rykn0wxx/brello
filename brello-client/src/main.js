/* eslint no-console:0 */
import Vue from 'vue'

// Components
import './components'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Plugins
import '@/plugins'

import '@/sass/styles.scss'

// Application imports
import App from './App'
import store from '@/store'
import router from '@/router'

// Sync store with router
sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
