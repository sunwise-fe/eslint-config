import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
require('sucrase/register')
/** @type {typeof import('./src/index.ts')} */
const { sunwise } = require('./src/index.ts')

// import { sunwise } from './dist/index.js'

export default sunwise([
  {
    files: ['src/**/*.ts'],
    rules: {
      'sort-keys/sort-keys-fix': 'error',
    },
  },
])
