<template>
  <div :class="['projects__item', { 'projects__item--opened': opened }]">
    <div class="project__header">
      <div :title="'Project name'" class="header__info header__name">
        <fa :icon="['fas', 'angle-down']" />{{ name }}
      </div>
      <div :title="'Project created'" class="header__info header__created">
        <fa :icon="['fas', 'calendar-plus']" />{{ created }}
      </div>
      <div :title="'Project owner'" class="header__info header__owner">
        <fa :icon="['fas', 'user-tie']" />
        {{ owner }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: { project: { type: Object, default: () => {} } },
  data: () => ({ opened: false }),

  computed: {
    name() {
      if (this.project) {
        return this.project.node.name
      }
      return ""
    },
    created() {
      if (this.project) {
        return new Date(this.project.node.createdAt).toLocaleString()
      }
      return ""
    },
    owner() {
      if (this.project) {
        return this.project.node.owner.login
      }
      return ""
    },
  },
}
</script>

<style scoped>
.projects__item {
  padding: 8px;
  cursor: pointer;
}
.projects__item:nth-of-type(2n + 1) {
  background: rgba(40, 44, 48, 0.3);
}
.projects__item--opened {
  background: #282c30;
}
.project__header {
  display: flex;
}
.header__info {
  padding: 3px 5px;
  display: flex;
  align-items: center;
  font-size: 16px;
  overflow: hidden;
}
svg {
  margin-right: 8px;
}
.header__name {
  font-weight: bold;
  flex: 2;
  font-size: 18px;
}
.header__created,
.header__owner {
  flex: 1;
}
@media (max-width: 767px) {
  .project__header {
    flex-wrap: wrap;
  }
  .header__name {
    min-width: 100%;
  }
}
@media (max-width: 500px) {
  .header__created,
  .header__owner {
    min-width: 100%;
  }
}
</style>
