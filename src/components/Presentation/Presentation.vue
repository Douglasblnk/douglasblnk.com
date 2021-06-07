<template>
  <div class="home-container">
    <h1>Hello, I'm Douglas Blank</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Presentation',
});
</script>

<style lang="postcss">
@layer components {
  .home-container {
    @apply w-full;

    /* display: flex;
    justify-content: center;
    align-items: center; */

    h1 {
      font-family: 'Monoid';
      color: #fff;
      font-weight: bold;
      font-size: 40px;
    }
  }
}
</style>
