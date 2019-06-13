<template>
  <div class="applicant-contact">
    <!-- Mobile -->
    <div
      v-if="config.applicant.mobile.enabled"
      class="mobile row"
    >
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'mobile-alt']" />
      </div>
      <div class="content">
        <a
          class="side-bar-text-color"
          :href="`tel:${config.applicant.mobile.value}`"
        >
          {{ config.applicant.mobile.pretty }}
        </a>
      </div>
    </div>

    <!-- Email -->
    <div
      v-if="config.applicant.email.enabled"
      class="email row"
    >
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </div>
      <div class="content">
        {{ config.applicant.email.value }}
      </div>
    </div>

    <!-- Social -->

    <!-- LinkedIn -->
    <div
      v-if="config.applicant.linkedin.enabled"
      class="linkedin row"
    >
      <div class="icon">
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
        />
      </div>
      <div class="content">
        <a
          class="side-bar-text-color"
          :href="config.applicant.linkedin.value"
        >
          {{ config.applicant.linkedin.pretty }}
        </a>
      </div>
    </div>

    <!-- Github -->
    <div
      v-if="config.applicant.github.enabled"
      class="github row"
    >
      <div class="icon">
        <font-awesome-icon
          :icon="['fab', 'github']"
        />
      </div>
      <div class="content">
        <a
          class="side-bar-text-color"
          :href="config.applicant.github.value"
        >
          {{ config.applicant.github.pretty }}
        </a>
      </div>
    </div>

    <!-- Facebook -->
    <div
      v-if="config.applicant.facebook.enabled"
      class="facebook row"
    >
      <div class="icon">
        <font-awesome-icon
          :icon="['fab', 'facebook']"
        />
      </div>
      <div class="content">
        <a
          class="side-bar-text-color"
          :href="config.applicant.facebook.value"
        >
          {{ config.applicant.facebook.pretty }}
        </a>
      </div>
    </div>

    <!-- Location -->
    <div
      v-if="config.applicant.location.enabled"
      class="location row"
    >
      <div class="icon">
        <font-awesome-icon
          :icon="['fas', 'map-marker-alt']"
        />
      </div>
      <div class="content">
        {{ config.applicant.location.value }}
      </div>
    </div>
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
@import "../../../config.scss";

.row {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  @media print {
    margin-bottom: 5pt;
  }

  .icon {
    width: 10%;
    display: flex;
    justify-content: center;

    svg {
      display: block;

      @media print {
        // height: 14pt;
      }
    }

    @media print {
      width: 15%;
    }
  }

  .content {
    width: 90%;
    padding-left: 10px;
    word-wrap: break-word;


    @media print {
      width: 85%;
      padding-left: 4pt;
    }
  }
}

</style>
