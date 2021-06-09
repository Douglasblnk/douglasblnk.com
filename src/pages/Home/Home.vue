<template>
  <div class="home">
    <div class="home__content">
      <Presentation />
      <Work />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',

  setup() {

  },
});
</script>

<style lang="postcss">
.home {
  margin: 10rem 0;

  @apply w-full flex flex-col items-center;

  &__content {
    @apply w-screen-lg;
  }
}
</style>
