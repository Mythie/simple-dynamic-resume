<template>
  <div
    id="app"
    class="text-color"
  >
    <!-- <div class="test" /> -->
    <div class="side-bar">
      <div class="slide" />
      <SideBar :class="['info', { 'with-stripe': config.resume.stripe.enabled }, 'hide-mobile']" />
      <div
        v-if="config.resume.stripe.enabled"
        class="stripe"
      />
    </div>
    <div class="resume-content">
      <Resume />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import Resume from '@/components/Resume.vue';

export default {
  name: 'App',
  components: {
    SideBar,
    Resume,
  },
  data() {
    return {
      config: this.$config,
    };
  },
  mounted() {
    // Okay so we want to try and break on each page programatically, but it's not so easy.

    const mq = window.matchMedia('print');
    if (mq.matches) {
      this.addPageBreaks();
    }

    mq.addListener(() => {
      if (mq.matches) {
        this.addPageBreaks();
      }
    });
  },
  methods: {
    addPageBreaks() {
      // I think this is the one chrome uses?
      let breakAt = 1100;
      // For storing the nodelist so we can sort it
      let potentialBreaks = [];

      // Get all the places we can break
      document.querySelectorAll('.page-breakable')
        .forEach((elem) => {
          // Add them to our list
          potentialBreaks.push(elem);
        });

      // Sort based on where each item ends
      potentialBreaks = potentialBreaks.sort(
        (a, b) => a.getBoundingClientRect().bottom > b.getBoundingClientRect().bottom,
      );

      // This seems to fix a timing thing?
      console.log(potentialBreaks);

      // Foreach potential break area
      potentialBreaks.forEach((elem) => {
        // Get its coords
        const coords = elem.getBoundingClientRect();

        // If it would be greater than our page break
        if (coords.bottom > breakAt) {
          // Lets forcefully break there to preserve formatting
          elem.classList.add('break-page');
          // Increase to the next page.
          breakAt *= 2;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import '../node_modules/normalize.css/normalize.css';
@import '../config.scss';

.break-page {
  @media print {
    page-break-before: always !important;
    margin-top: 20pt !important;
  }
}

.test {
  @media print {
    position: absolute;
    top: 1100px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #000;
    z-index: 999;
  }
}

#app {
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // margin-top: 60px;
  font-size: 18px;
}

*, *::before, *::after {
  box-sizing: border-box;
}

hr {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 2px !important;
  margin-bottom: 17px;
  border: 0;

  @media print {
    margin-bottom: 5pt;
  }
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  margin-bottom: 12px;
}

p {
  margin: 7px 0;

  @media print {
    margin: 5pt 0;
  }
}

@media print {
  @page {
    padding: 0;
    margin: 0;
  }

  html, body, #app {
    font-size: 10pt !important;
  }
}

a, a:active, a:visited {
  text-decoration: none;
}

.side-bar {
  position: fixed;
  display: flex;
  height: 100%;
  width: 22%;

  @media print {
    width: 28%;
  }

  .info {
    width: 100%;
    padding: 20px;

    &.with-stripe {
      width: 90%;
    }

    @media print {
      padding: 7pt;
    }
  }

  .hide-mobile {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .stripe {
    min-width: 10%;
    background: $stripeColor;
  }
}

.resume-content {
  @media screen and (min-width: 600px) {
    margin-left: 22%;
    width: 78%;

  }
  padding: 40px;

  @media print {
    margin-left: 28%;
    width: 72%;
    padding: 10pt;
  }
}
</style>
