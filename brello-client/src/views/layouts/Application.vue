<template>
  <div class="app layout-row">
    <md-app class="app-md" md-mode="fixed">
      <md-app-toolbar class="md-primary app-toolbar md-whiteframe-glow-z1">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">My Title</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="logoutUser" v-if="userLogin">
              <md-icon>exit_to_app</md-icon>
              <md-tooltip md-direction="top">Logout</md-tooltip>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full" class="app-drawer">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list class="app-drawer-list">
          <md-list-item class="app-drawer__item home" :class="activeRoute">
            <router-link to="/home" class="app-drawer__link">
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Home</span>
            </router-link>
          </md-list-item>
          <md-list-item class="app-drawer__item about" :class="activeRoute">
            <router-link to="/about" class="app-drawer__link">
              <md-icon>dashboard</md-icon>
              <span class="md-list-item-text">About</span>
            </router-link>
          </md-list-item>
          <md-list-item class="app-drawer__item components" :class="activeRoute">
            <router-link to="/components" class="app-drawer__link">
              <md-icon>person</md-icon>
              <span class="md-list-item-text">Components</span>
            </router-link>
          </md-list-item>
          <md-list-item class="app-drawer__item welcome" :class="activeRoute">
            <router-link to="/welcome" class="app-drawer__link">
              <md-icon>lock</md-icon>
              <span class="md-list-item-text">Welcome</span>
            </router-link>
          </md-list-item>
          <md-list-item class="app-drawer__item boardsboards" :class="activeRoute">
            <router-link to="/boards" class="app-drawer__link">
              <md-icon>menu</md-icon>
              <span class="md-list-item-text">Boards</span>
            </router-link>
          </md-list-item>
          <div class="item-divider"></div>
        </md-list>
      </md-app-drawer>

      <md-app-content class="app-content layout-column flex">
        <md-views />
        <core-scroll-fab scroll-elem-selector=".md-app-scroller" />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutApplication',
  data () {
    return {
      activeRoute: '',
      showSidebar: true,
      menuVisible: true
    }
  },
  computed: {
    ...mapGetters('user', ['userLogin'])
  },
  watch: {
    '$route': {
      handler: 'getActiveRoute',
      immediate: true
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    },
    logoutUser () {
      this.$store.dispatch('user/logoutUser')
      this.$store.dispatch('boards/clearBoards')
      this.$router.push('/login')
    },
    getActiveRoute (val) {
      this.activeRoute = `${val.name}-active`.toLowerCase()
    }
  }
}
</script>

<style lang="scss">
.app {
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  &-md {
    width: 100%;
  }
  .app-md .app-drawer {
    &, .app-drawer-list {
      background-color: #2f323e;
    }
  }
  &-content.md-app-content {
    padding: 0;
  }
}
.app-drawer {
  .app-drawer {
    &__item {
      transition: all 0.2s ease-in-out;
      border-top: 1px solid rgba(0,0,0,0.1);
      // border-bottom: 1px solid rgba(255,255,255,0.05);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
      &:hover {
        background-color: rgba(0,0,0,0.15);
      }
    }
    &__link {
      color: rgba(250, 250, 250, 0.5) !important;
      line-height: 48px;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      &:hover {
        text-decoration: none !important;
        color: rgba(250, 250, 250, 0.9);
        > .md-list-item-text, > .md-icon {
          color: rgba(250, 250, 250, 0.9);
        }
      }
      > .md-list-item-text {
        color: currentColor;
      }
      > .md-icon {
        color: currentColor;
        margin-right: 32px;
        &:first-child {
          margin-right: 32px;
        }
      }
      &.active {
        color: rgba(255, 255, 255, 0.7) !important;
        &:hover {
          color: rgba(255, 255, 255, 0.9);
          > .md-list-item-text, > .md-icon {
            color: rgba(255, 255, 255, 0.9);
          }
        }
      }
    }
  }
}
.home.home-active, .about.about-active, .components.components-active, .boardsboards.boardsboards-active {
  background-color: rgba(0,0,0,0.1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
}
.item-divider {
  height: 1rem;
  margin: 0;
  background: rgba(0,0,0,0.25);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset;
}
</style>
