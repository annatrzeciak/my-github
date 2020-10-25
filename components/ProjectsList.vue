<template>
  <div class="projects">
    <h3
      v-if="showTotalCountInfo && totalProjectsCount"
      class="projects__main-info"
    >
      Found {{ totalProjectsCount }} projects
    </h3>
    <div v-if="projects.length" class="projects__content">
      <ProjectItem
        v-for="project in projects"
        :project="project"
        :key="project.id"
      />
    </div>
    <!-- Show only when user tried find something-->
    <div
      v-else-if="!projects.length && showTotalCountInfo"
      class="projects__content--empty"
    >
      no data to show
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ProjectItem from "./ProjectItem"
export default {
  name: "ProjectsList",
  components: { ProjectItem },
  props: {
    projects: { type: Array, default: () => [] },
  },
  computed: {
    ...mapGetters("project", ["totalProjectsCount", "searchedValue"]),
    showTotalCountInfo() {
      return this.searchedValue !== ""
    },
  },
}
</script>

<style scoped>
.projects__content {
  border: 2px solid #2a2e32;
}
.projects__main-info {
  margin-bottom: 15px;
  text-align: right;
}
.projects__content--empty {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
