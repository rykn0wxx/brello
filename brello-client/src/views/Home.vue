<template>
  <div class="home">
    <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
      Button
    </button>
    <md-whiteframes :depth="8">
      <span>i am whiteframes</span>
    </md-whiteframes>
    <form novalidate class="md-layout">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Users</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="first-name">First Name</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name"  />
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="last-name">Last Name</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" />
              </md-field>
            </div>
          </div>

        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary">Create user</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'aaaa',
      sending: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
