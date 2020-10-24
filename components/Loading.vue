<template>
  <div v-if="loading" class="loading">
    <div class="loading__spinner">
      <svg
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        stroke="#000"
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".25" cx="18" cy="18" r="18" />
            <path
              d="M36 18c0-9.94-8.06-18-18-18"
              transform="rotate(195.438 18 18)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
    <div class="loading__text">Loading...</div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
  },
}
</script>

<style scoped>
.loading {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background: #34393e;
  opacity: 0.95;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.loading__spinner svg {
  stroke: #257192;
  margin-bottom: 16px;
}
</style>
