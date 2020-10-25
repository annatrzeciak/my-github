<template>
  <button
    :class="[
      'button',
      buttonType ? 'button--' + buttonType : '',
      size ? 'button--' + size : '',
    ]"
    :disabled="disabled"
    @click.stop="$emit('clicked')"
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
    size: { type: String, default: "" },
  },
}
</script>

<style>
.button {
  display: inline-block;
  padding: 8px 12px;
  font-size: 14px;
  background: rgba(17, 18, 18, 0.15);
  border: 1px solid rgba(17, 18, 18, 0.15);
  border-radius: 2px;
  color: #c6cdcf;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
}
.button--small {
  padding: 3px 8px;
  margin: 0;
}
.button:not(:disabled):hover {
  background: rgba(17, 18, 18, 0.3);
}

.button--blue {
  background: #257192;
  border-color: #257192;
}

.button--blue:not(:disabled):hover {
  background: #287ea4;
  border-color: #287ea4;
}
.button:focus {
  outline: none;
  border-color: #c6cdcf !important;
}

.button:disabled {
  cursor: auto;
  opacity: 0.5;
}
</style>
