<template>
  <div class="app layout-row">
    <md-app md-waterfall md-mode="fixed" class="app-md">
      <md-app-toolbar class="md-primary app-toolbar md-whiteframe-glow-z1">
        <md-button class="md-icon-button" @click="showSidebar = !showSidebar">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>
      <md-app-drawer md-permanent="full" class="app-drawer" v-if="showSidebar">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>
        <md-list class="app-drawer-list">
          <md-list-item class="app-drawer__item home" :class="activeRoute">
            <router-link to="/" class="app-drawer__link">
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
export default {
  name: 'Zapp',
  data () {
    return {
      activeRoute: '',
      showSidebar: true
    }
  },
  metaInfo () {
    return {
      title: 'Dashboard by rykn0wxx'
    }
  },
  watch: {
    '$route': {
      handler: 'getActiveRoute',
      immediate: true
    }
  },
  methods: {
    getActiveRoute (val) {
      this.activeRoute = `${val.name}-active`
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
.home.home-active, .about.about-active, .components.components-active {
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
