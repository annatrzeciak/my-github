<template>
  <div class="details">
    <div v-if="details" class="">
      <div class="details__main">
        <div
          v-if="details.description"
          class="details__info details__description"
        >
          <fa :icon="['fas', 'info']" />
          {{ details.description }}
        </div>
      </div>
      <div v-if="details.url" class="details__info details__url">
        <fa :icon="['fas', 'clone']" /><span class="url__value">{{
          details.url
        }}</span>
        <Button :buttonType="'blue'" :text="'Copy url'" :size="'small'" />
      </div>
      <div
        v-if="details.defaultBranch"
        class="details__info details__default-branch"
      >
        <fa :icon="['fas', 'code-branch']" />default branch:
        {{ details.defaultBranch }}
      </div>
      <div v-if="details.commits" class="details__info details__commits">
        <fa :icon="['fab', 'elementor']" />Last commits:
        <div
          v-for="commit in details.commits"
          :key="commit.id"
          class="details__commit"
        >
          <div class="commit__info commit__date">
            {{ new Date(commit.committedDate).toLocaleString() }}
          </div>
          <div class="commit__info commit__author">
            {{ commit.author.name }}
          </div>
          <div class="commit__info commit__message">
            {{ commit.message }}
          </div>
        </div>
      </div>
    </div>
    <div v-else class="detail--empty">no data to show</div>
  </div>
</template>

<script>
import Button from "./Button"
export default {
  name: "ProjectItemDetails",
  components: { Button },
  props: { details: { type: Object, default: () => {} } },
  computed: {
    commits() {
      if (
        this.details.commits &&
        this.details.commits.node &&
        this.details.commits.node.target
      ) {
        return this.details.commits.node.target.history.nodes
      }
      return []
    },
  },
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
.details__info {
  margin-bottom: 8px;
  min-height: 24px;
}
.details__commits {
  height: auto;
}
.details__commit {
  padding-left: 60px;
  margin-top: 8px;
  display: flex;
  align-items: center;
}
.commit__info {
  flex: 1;
  margin-right: 8px;
}
.commit__message {
  flex: 3;
  margin-right: 8px;
}
svg {
  width: 36px !important;
  margin-right: 5px;
}
@media (max-width: 500px) {
  .url__value {
    display: none;
  }
}

@media (max-width: 991px) {
  .details__commit {
    flex-direction: column;
  }
  .commit__info {
    width: 100%;
  }
}
</style>
