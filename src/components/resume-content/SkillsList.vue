<template>
  <div class="skills-list page-breakable">
    <h2>
      My Skills
    </h2>
    <hr class="horizontal-rule-color">
    <ul>
      <li
        v-for="(skill, index) in config.skills.list"
        :key="index"
      >
        {{ skill }}
      </li>
    </ul>
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
  h2 {
    // @media screen {
    //   font-size: 2rem;
    // }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;

    li {
      list-style-position: inside;
      margin: 7px 0;
      width: 100%;

      &:nth-child(3) {
        padding-right: 0;
      }

      @media screen and (min-width: 1000px) {
        width: 33.333%;
        padding-right: 40px;
      }

      @media print {
        width: 50%;
        margin: 2.5pt 0;
        padding-right: 5pt;

      }
    }
  }
</style>
