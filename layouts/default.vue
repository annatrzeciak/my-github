<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #34393e;
  color: #c6cdcf;
  min-height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
}

.row {
  display: flex;
}

.row--content-centered-vertical {
  align-items: center;
}

.row--content-centered-horizontal {
  justify-content: center;
}

.row__item {
  height: 100%;
  width: 100%;
  flex: 1;
}

.row__item--content-to-right {
  text-align: right;
}

.page {
  min-height: calc(100% - 100px);
  box-sizing: border-box;
}
.page__title {
  font-size: 32px;
  padding: 5px 20px;
  border-bottom: 2px solid #2a2e32;
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  .container {
    margin: 20px auto;
  }
  .row {
    flex-direction: column;
  }
  .page__title {
    font-size: 26px;
  }
}
</style>
