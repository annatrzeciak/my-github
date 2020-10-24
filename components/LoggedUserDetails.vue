<template>
  <div>
    <h2>Hello {{ username }}</h2>
    <h4>You are logged so you can search project</h4>
    <SearchForm />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import SearchForm from "./SearchForm"
export default {
  name: "LoggedUserDetails",
  components: { SearchForm },
  data: () => ({}),
  computed: {
    ...mapGetters(["loggedInUser"]),
    username() {
      if (this.loggedInUser) {
        return this.loggedInUser.name || this.loggedInUser.login
      }
    },
  },
  created() {},
}
</script>

<style scoped></style>
