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
  middleware: "authenticated",
  data: () => ({
    searchValue: "",
  }),
  computed: { ...mapGetters("project", ["projects"]) },
  created() {
    if (this.$route.query) {
      if (this.$route.query.searchValue) {
        this.$nextTick(() => {
          this.$nuxt.$loading.start()
        })

        this.searchValue = this.$route.query.searchValue
      }
      this.$router.push({ query: {} })
    }
  },
}
</script>

<style scoped></style>
