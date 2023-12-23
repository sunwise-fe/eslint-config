# @sunwise/eslint-config [![npm](https://img.shields.io/npm/v/@sunwise/eslint-config.svg)](https://npmjs.com/package/@sunwise/eslint-config)

Flat ESLint config for JavaScript, TypeScript, Vue 2, Vue 3, Prettier.

[Legacy Version](https://github.com/sunwise-fe/eslint-config-legacy)

## Features

- Format with Prettier.
- Designed to work with TypeScript, Vue 2 and 3 out-of-box.
- Support JSON(5), YAML, Markdown...
- Sort imports, `package.json`, `tsconfig.json`...
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Reasonable defaults, best practices, only one-line of config

## Install

```bash
npm i -D @sunwise/eslint-config
```

Require Node.js >= 16.14.

## Usage

```js
// eslint.config.js
import { sunwise } from '@sunwise/eslint-config'

export default sunwise
```

### Custom Config

```js
import { sunwise } from '@sunwise/eslint-config'
export default sunwise(
  [
    /* your custom config */
  ],
  { vue: true, prettier: true, markdown: true, unocss: false },
)
```

### VSCode

```jsonc
{
  "eslint.experimental.useFlatConfig": true
}
```

## Comparing to [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

Most of the rules are the same, but there are some differences:

- Use Prettier instead of [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic).
- Support both Vue 2 and Vue 3.
- Support Vue Reactivity Transform.
- More stricter rules.
