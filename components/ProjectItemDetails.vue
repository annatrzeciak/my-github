<template>
  <div class="details">
    <div v-if="details" class="">
      <div class="details__main">
        <div
          v-if="details.description"
          class="details__info details__description"
        >
          <fa :icon="['fas', 'info']" />
          <span class="detail__value">
            {{ details.description }}
          </span>
        </div>
      </div>
      <div v-if="details.url" class="details__info details__url">
        <fa :icon="['fas', 'clone']" />
        <span class="url__value">
          <input
            :value="details.url"
            :id="'input-details-' + details.id"
            class="hidden-input"
            type="text"
          />
          <a
            :href="details.url"
            title="Open project repository"
            target="_blank"
          >
            {{ details.url }}
          </a>
        </span>
        <Button
          :buttonType="'blue'"
          :text="copyButtonText"
          :size="'small'"
          @clicked="copyUrl"
        />
      </div>
      <div
        v-if="details.defaultBranch"
        class="details__info details__default-branch"
      >
        <fa :icon="['fas', 'code-branch']" />
        default branch: {{ details.defaultBranch }}
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
  data: () => ({
    copyButtonText: "Copy url",
  }),
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
  methods: {
    copyUrl() {
      const copyText = document.getElementById(
        "input-details-" + this.details.id
      )
      copyText.select()
      copyText.setSelectionRange(0, 99999)

      document.execCommand("copy")
      this.copyButtonText = "Copied!"
    },
  },
}
</script>

<style scoped>
.hidden-input {
  opacity: 0;
  position: absolute;
}
.details {
  margin-top: 5px;
  margin-bottom: 5px;
  border-top: 1px solid #40454a;
}
.detail--empty {
  text-align: center;
}
.details__info {
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
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
a {
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
