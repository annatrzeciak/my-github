<template>
  <div>
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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem
      beatae, commodi cumque dolorem ducimus eos eum ex fugiat iure, libero
      optio perferendis praesentium quibusdam quis rem reprehenderit sed
      suscipit!
    </p>
  </div>
</template>

<script>
import Button from "./Button"
export default {
  name: "LoginForm",
  components: { Button },
  methods: {
    async authorize() {
      try {
        await this.$auth.loginWith("github")
      } catch (e) {
        //TODO: show message about error
        this.$router.push("/")
      }
    },
  },
}
</script>

<style scoped></style>
