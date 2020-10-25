<template>
  <form class="form--search" @submit.prevent="searchRepositories">
    <InputText
      :value="search"
      placeholder="Enter a name for the repository"
      @value-updated="search = $event"
    />
    <Button
      :disabled="!Boolean(search.length)"
      text="Search"
      button-align="right"
      button-type="blue"
    />
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Button from "./Button"
import InputText from "./InputText"
export default {
  name: "SearchForm",
  components: { InputText, Button },
  props: { searchValue: { type: String, default: "", required: false } },
  data: () => ({
    search: "",
  }),
  computed: {
    ...mapGetters("project", ["searchedValue"]),
  },
  mounted() {
    this.search = this.searchValue
    if (this.searchedValue !== this.searchValue) {
      this.getProjectsWithContains()
    }
  },
  methods: {
    ...mapActions("project", ["searchProjects"]),
    async searchRepositories() {
      this.$nuxt.$loading.start()
      // redirect from main page to search
      if (!this.$route.path.includes("/search"))
        this.$router.push(`/search?searchValue=${this.search}`)
      else this.getProjectsWithContains()
    },
    async getProjectsWithContains() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      await this.searchProjects(this.search)
        .catch((e) => {
          //TODO add errors style
          alert(e.message)
          console.error(e)
        })
        .finally(() => {
          this.$nextTick(() => {
            this.$nuxt.$loading.finish()
          })
        })
    },
  },
}
</script>

<style scoped></style>
