<template>
  <div class="experience-item">
    <h3>
      {{ item.title }} - {{ item.company }}
    </h3>
    <p
      v-if="item.paragraph && item.paragraph.length > 0"
      class="experience-description"
      v-html="item.paragraph.replace(/\n/g, '<br />')"
    >
    </p>
    <div
      v-if="item.achievementList && item.achievementList.length > 0"
      class="experience-achievements"
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
    <p class="experience-duration">
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

.experience-achievements {
  margin-top: 15px;

  @media print {
    margin-top: 7pt;
  }
}

.experience-description {
  font-size: 1.2rem;

  @media print {
    font-size: 1rem;
  }
}

.experience-duration {
  width: 100%;
  text-align: right;
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
      list-style-position: inside;
      margin-bottom: 7px;
      width: 100%;

      &:nth-child(3) {
        padding-right: 0;
      }

      @media screen and (min-width: 1000px) {
        width: 50%;
        padding-right: 10px;
      }

      @media print {
        margin-bottom: 2.5pt;
        padding-right: 5pt;

      }
    }
  }
</style>
