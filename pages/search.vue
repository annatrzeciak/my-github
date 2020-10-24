<template>
  <section class="page search-page container">
    <h1 class="page__title">Search projects</h1>
    <div class="row row--content-centered-horizontal">
      <div class="row__item row__item--content-to-right">
        <SearchForm :search-value="searchValue" />
      </div>
    </div>
    <ProjectsList :projects="projects" />
  </section>
</template>

<script>
import { mapGetters } from "vuex"
import SearchForm from "../components/SearchForm"
import ProjectsList from "../components/ProjectsList"
export default {
  name: "Search",
  components: { ProjectsList, SearchForm },
  middleware: "auth",
  data: () => ({
    searchValue: "",
  }),
  computed: { ...mapGetters("project", ["projects"]) },
  created() {
    // remove queries which were set during redirect after auth
    if (this.$route.query) {
      if (this.$route.query.searchValue)
        this.searchValue = this.$route.query.searchValue
      this.$router.push({ query: {} })
    }
  },
}
</script>

<style scoped></style>
