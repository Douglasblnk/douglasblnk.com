const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    browser: true,
    es6: true,
  },
  extends: ['@douglasblnk'],
})
