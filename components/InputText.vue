<template>
  <input
    :placeholder="placeholder"
    v-model="scratch"
    class="input"
    type="text"
  />
</template>

<script>
export default {
  name: "InputText",
  props: {
    value: { type: String, default: "", required: false },
    placeholder: { type: String, default: "", required: false },
  },
  data: () => ({ scratch: "" }),
  watch: {
    value() {
      this.scratch = this.value
    },
    scratch() {
      this.$emit("value-updated", this.scratch)
    },
  },
}
</script>

<style scoped>
.input {
  border: 1px solid #40454a;
  box-sizing: border-box;
  border-radius: 2px;
  background: transparent;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  min-width: 250px;
  color: #c6cdcf;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  height: 32px;
}
.input:focus {
  border-color: #c6cdcf;
  outline: none;
}
</style>
