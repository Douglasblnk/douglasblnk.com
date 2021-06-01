const { defineConfig } = require('eslint-define-config')
const teste = require('@douglasblnk/eslint-config')

console.log(`teste`, teste)

module.exports = defineConfig({
    env: {
        browser: true,
        es6: true
    },
    extends: ['@douglasblnk'],
})
