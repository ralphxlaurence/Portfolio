<template>
  <footer class="footer text-white text-center py-3">
    <small>© {{ currentYear }} Ralph's Portfolio. All Rights Reserved.</small>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  width: 100%; /* Full width */
  padding: 10px 0; /* Padding for footer */
  background-color: #2d323b; /* Matches navbar color */
  color: #a0aec0; /* Footer text color */
  font-family: 'Arial', sans-serif; /* Font family */
  text-align: center; /* Center text */
  position: fixed; /* Keep footer fixed at the bottom */
  left: 0; /* Align to the left */
  bottom: 0; /* Align to the bottom */
  z-index: 10; /* Ensure it stays above other content */
}
</style>
