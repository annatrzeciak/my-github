<template>
  <div class="projects">
    <div v-if="projects">
      <ProjectItem
        v-for="project in projects"
        :project="project"
        :key="project.id"
      />
    </div>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem"
export default {
  name: "ProjectsList",
  components: { ProjectItem },
  props: { projects: { type: Array, default: () => [] } },
}
</script>

<style scoped>
.projects {
  border: 2px solid #2a2e32;
}
</style>
