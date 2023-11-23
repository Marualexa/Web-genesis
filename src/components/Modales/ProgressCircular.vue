<template>
  <div class="text-center">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :model-value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: {},
      value: 0,
    };
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>

<style lang="sass">
@import "@sass/importComponent.scss"
</style>
