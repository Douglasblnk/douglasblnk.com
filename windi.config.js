import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: [
      'src/**/*.{vue,ts}',
    ],
    exclude: [
      'public',
      'node_modules',
      '.git',
    ],
  },
});
