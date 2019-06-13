<template>
  <div class="reference-item">
    <h3>
      {{ item.name }} - {{ item.company }}
      <small v-if="item.position && item.position.length > 0">
        {{ item.position }}
      </small>
    </h3>
    <p>
      <span v-if="item.mobile && item.mobile.length > 0">
        <strong>
          Mobile:
        </strong>
        {{ item.mobile }}
      </span>
      <span v-if="item.email && item.email.length > 0">
        <strong>
          Email:
        </strong>
        {{ item.email }}
      </span>
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
  small {
    display: block;
  }
  span {
    display: block;
  }
</style>
