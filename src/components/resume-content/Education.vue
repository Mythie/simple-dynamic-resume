<template>
  <div class="education">
    <h2>
      My Education
    </h2>
    <hr class="horizontal-rule-color">
    <div class="page-breakable" />
    <EducationItem
      v-for="(item, index) in config.education.list"
      :key="index"
      :item="item"
      class="page-breakable"
    />
  </div>
</template>

<script>
import EducationItem from '@/components/resume-content/EducationItem.vue';

export default {
  components: {
    EducationItem,
  },
  data() {
    return {
      config: this.$config,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
