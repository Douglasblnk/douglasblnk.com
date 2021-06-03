<template>
  <div class="home-container">
    <h1>Douglas Blank</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Presentation',
})
</script>

<style lang="scss">
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  h1 {
    color: var(--title-color);
    font-weight: 300;
    font-size: 3rem;
    letter-spacing: 1px;
  }
}
</style>
