<template>
  <div class="form--search">
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
      @clicked="searchProjects"
    />
  </div>
</template>

<script>
import Button from "./Button"
import InputText from "./InputText"
export default {
  name: "SearchForm",
  components: { InputText, Button },
  data: () => ({
    search: "",
  }),
  methods: {
    async searchProjects() {
      console.log(this.search)
    },
  },
}
</script>

<style scoped></style>
