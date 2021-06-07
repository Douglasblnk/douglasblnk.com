<template>
  <Home />
</template>

<script>
import Home from './pages/Home/Home.vue';

export default {
  components: {
    Home,
  },

  setup() {
    const poxa = 'poxa';

    return {
      poxa,
    };
  },
};
</script>
