<template>
  <div id="app">
    <AppNavbar />
    <div class="content-wrapper">
      <router-view />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "AppRoot",
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style scoped>
.content-wrapper {
  padding: 20px;
  min-height: 100vh;
}
</style>
