<template>
  <div class="details">
    <div v-if="details" class="">{{ details }}</div>
    <div v-else class="detail--empty">no data to show</div>
  </div>
</template>

<script>
export default {
  name: "ProjectItemDetails",
  props: { details: { type: Object, default: () => {} } },
}
</script>

<style scoped>
.details {
  margin-top: 15px;
  margin-bottom: 15px;
}
.detail--empty {
  text-align: center;
}
</style>
