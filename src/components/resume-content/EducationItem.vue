<template>
  <div class="education-item">
    <h3>
      {{ item.course }} - {{ item.provider }}
    </h3>
    <p
      v-if="item.paragraph && item.paragraph.length > 0"
      class="education-description"
    >
      {{ item.paragraph }}
    </p>
    <div
      v-if="item.achievementList && item.achievementList.length > 0"
      class="education-achievements"
    >
      <h4>Notable Achievements</h4>
      <ul>
        <li
          v-for="(achievement, index) in item.achievementList"
          :key="index"
        >
          {{ achievement }}
        </li>
      </ul>
    </div>
    <p class="education-duration">
      {{ item.duration }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>

.education-achievements {
  margin-top: 15px;

  @media print {
    margin-top: 7pt;
  }
}

.education-description {
  font-size: 1.2rem;

  @media print {
    font-size: 1rem;
  }
}

.education-duration {
  width: 100%;
  text-align: right;
  padding-top: 7px;
  @media print {
    font-size: 0.8rem;
  }
}

h4 {
  @media print {
    margin-bottom: 4pt;
  }
}

ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    li {
      width: 100%;
      list-style-position: inside;
      margin-bottom: 7px;

      &:nth-child(3) {
        padding-right: 0;
      }

      @media screen and (min-width: 1000px) {
        padding-right: 40px;
        width: 50%;
      }

      @media print {
        margin-bottom: 2.5pt;
        padding-right: 5pt;

      }
    }
  }
</style>
