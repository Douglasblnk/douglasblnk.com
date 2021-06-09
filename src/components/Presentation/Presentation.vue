<template>
  <div class="presentation">
    <div class="presentation__title">
      <h1>Hello, I'm Douglas Blank</h1>
      <small>or just Doug</small>
    </div>
  </div>
</template>

<style lang="postcss">
.presentation {
  @apply flex flex-col items-center mb-32;

  &__title {
    @apply flex flex-col items-end;

    h1 {
      font-family: 'Monoid';

      @apply text-white font-bold text-3xl opacity-70;
    }

    small {
      font-family: 'Monoid';

      @apply text-white opacity-40;
    }
  }
}

</style>
