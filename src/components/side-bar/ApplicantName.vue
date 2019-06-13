<template>
  <div class="resume-name">
    <h1>
      {{ config.applicant.name }}

      <small>
        {{ config.applicant.tagline }}
      </small>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: this.$config,
    };
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 3.2rem;
    margin-bottom: 0;
    padding-bottom: 0;
    word-wrap: break-word;

    small {
      display: block;
      width: 100%;
      font-size: 1.2rem;

      @media print {
        // margin-top: 7pt;
        font-size: 1rem;
      }
    }
  }
</style>
