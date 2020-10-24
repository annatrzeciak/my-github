<template>
  <section class="page container">
    <h1 class="page__title main-page">Search projects</h1>
  </section>
</template>

<script>
export default {
  name: "Search",
  middleware: "auth",
  mounted() {
    // remove queries which were set during redirect after auth
    if (this.$route.query) this.$router.push({ query: {} })
  },
}
</script>

<style scoped></style>
