<template>
  <div class="resume">
    <CurrentRole
      v-if="config.currentRole.enabled"
      class="spacer"
    />
    <Experience
      v-if="config.experience.enabled"
      class="spacer"
    />
    <Education
      v-if="config.education.enabled"
      class="spacer"
    />
    <SkillsList
      v-if="config.skills.enabled"
      class="spacer"
    />
    <References
      v-if="config.references.enabled"
      class="spacer"
    />
  </div>
</template>

<script>
import CurrentRole from '@/components/resume-content/CurrentRole.vue';
import Experience from '@/components/resume-content/Experience.vue';
import Education from '@/components/resume-content/Education.vue';
import SkillsList from '@/components/resume-content/SkillsList.vue';
import References from '@/components/resume-content/References.vue';

export default {
  components: {
    CurrentRole,
    Experience,
    Education,
    SkillsList,
    References,
  },
  data() {
    return {
      config: this.$config,
    };
  },
  computed: {
    innerWidth() {
      return window.innerWidth;
    },
    innerHeight() {
      return window.innerHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
  .resume {
    @media print {
      margin-top: 10pt;
      page-break-inside: avoid;
    }
  }

  .spacer {
    margin-bottom: 20px;

    @media print {
      margin-bottom: 7pt;
    }
  }
</style>
