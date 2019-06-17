<template>
  <div class="resume-name">
    <h1
      v-for="(name, index) in names"
      :key="index"
      :class="{
        fit: name.length >= 8,
        fitter: name.length >= 10,
        fittest: name.length >= 12
      }"
    >
      {{ name }}
    </h1>
    <h1>
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
  computed: {
    names() {
      return this.config.applicant.name.split(' ');
    },
  },
  mounted() {
    // const mq = window.matchMedia('print');
    // if (mq.matches) {
    //   this.fitText();
    // }

    // mq.addListener(() => {
    //   if (mq.matches) {
    //     this.fitText();
    //   }
    // });
  },
  methods: {
    // fitText() {
    //   this.fitTextObj = fitty('.fit');
    //   fitty.fitAll();
    // },
  },
};
</script>

<style lang="scss" scoped>

  @media print {
    .fit {
      font-size: 2.5rem;

      &.fitter {
        font-size: 2.2rem;

        &.fittest {
          font-size: 2rem;
        }
      }
    }
  }

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
