<template>
  <button
    :class="['button', buttonType ? 'button--' + buttonType : '']"
    :disabled="disabled"
    @click="$emit('clicked')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonType: { type: String, default: "" },
    text: { type: String, required: true },
    disabled: { type: Boolean, default: false },
  },
}
</script>

<style>
.button {
  display: inline-block;
  padding: 8px 12px;
  font-size: 14px;
  background: rgba(17, 18, 18, 0.15);
  border-radius: 2px;
  border: none;
  color: #c6cdcf;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
}
.button:hover {
  background: rgba(17, 18, 18, 0.3);
}
.button--blue {
  background: #257192;
}
.button--blue:hover {
  background: #287ea4;
}
</style>
