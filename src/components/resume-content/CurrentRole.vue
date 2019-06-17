<template>
  <div class="current-role">
    <h2>Current Role</h2>
    <hr class="horizontal-rule-color">
    <div class="page-breakable" />
    <ExperienceItem :item="config.currentRole" />
  </div>
</template>

<script>
import ExperienceItem from '@/components/resume-content/ExperienceItem.vue';

export default {
  components: {
    ExperienceItem,
  },
  data() {
    return {
      config: this.$config,
    };
  },
};
</script>
