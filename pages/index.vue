<template>
  <section class="page container">
    <h1 class="page__title main-page">Welcome to the my github app</h1>
    <div class="row row--content-centered-vertical">
      <div class="row__item">
        <img class="main-page__image" src="/work.jpg" alt="" />
      </div>
      <div class="row__item row__item--content-to-right main-page__details">
        <LoginForm v-if="!loggedInUser" />
        <LoggedUserDetails v-else />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex"
import LoginForm from "../components/LoginForm"
import LoggedUserDetails from "../components/LoggedUserDetails"
export default {
  components: { LoggedUserDetails, LoginForm },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  methods: {},
}
</script>

<style>
.main-page__image {
  max-width: 100%;
}
.main-page__details {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
}
@media (max-width: 767px) {
  .main-page__details {
    padding-left: 0;
  }
}
</style>
