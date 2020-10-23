<template>
  <section class="page container">
    <h1 class="page__title main-page">Welcome to the my github app</h1>
    <div class="row row--content-centered-vertical">
      <div class="row__item">
        <img class="main-page__image" src="/work.jpg" alt="" />
      </div>
      <div class="row__item row__item--content-to-right main-page__details">
        <h2>You must log in to see the list of projects.</h2>
        <h4>Use the button below to redirect you to Github</h4>
        <Button
          text="Authorize by Github"
          button-align="right"
          button-type="blue"
          @clicked="authorize"
        />
        <p>
          It is good place to add more info, but I don't have idea so I need use
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          autem beatae, commodi cumque dolorem ducimus eos eum ex fugiat iure,
          libero optio perferendis praesentium quibusdam quis rem reprehenderit
          sed suscipit!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../components/Button"
export default {
  components: { Button },
  methods: {
    async authorize() {
      await this.$auth.loginWith("github").catch((e) => {
        console.error(e)
      })
    },
  },
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
