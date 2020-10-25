<template>
  <div
    :class="['projects__item', { 'projects__item--opened': opened }]"
    @click="toggleItem"
  >
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
    <div v-if="opened" class="project__content">
      <Loading v-if="loading" ref="loading" :inside-element="true" />
      <div v-else><ProjectItemDetails :details="details" /></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Loading from "./Loading"
import ProjectItemDetails from "./ProjectItemDetails"
export default {
  name: "ProjectItem",
  components: { ProjectItemDetails, Loading },
  props: { project: { type: Object, default: () => {} } },
  data: () => ({ opened: false, loading: false }),

  computed: {
    ...mapGetters("project", ["projectsDetails"]),
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
    details() {
      if (this.projectsDetails && this.projectsDetails[this.project.node.id])
        return this.projectsDetails[this.project.node.id]
      return null
    },
  },
  methods: {
    ...mapActions("project", ["getProjectDetails"]),
    async toggleItem() {
      if (this.opened) {
        this.opened = false
      } else {
        this.opened = true
        this.loading = true

        // to fix problem with this.ref.loading which returned undefined
        // https://stackoverflow.com/a/51080933
        this.$nextTick(function () {
          this.$refs.loading.start()
        })

        if (!this.details)
          await this.getProjectDetails({ name: this.name, owner: this.owner })
        this.$nextTick(function () {
          this.$refs.loading.finish()
        })

        // for fade
        setTimeout(() => {
          this.loading = false
        }, 800)
      }
    },
  },
}
</script>

<style scoped>
.projects__item {
  padding: 8px;
  cursor: pointer;
}
.projects__item:not(.projects__item--opened):nth-of-type(2n + 1) {
  background: rgba(40, 44, 48, 0.3);
}
.projects__item--opened {
  background: #282c30;
  border-bottom: 1px solid #287ea4;
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
  svg {
    width: 36px !important;
  }
}
@media (max-width: 500px) {
  .header__created,
  .header__owner {
    min-width: 100%;
  }
}
</style>
