# @tabula/eslint-config

This package provides ESLint configurators as shared configs.

## Rules

We use recommended rules from the following packages:

- [eslint](https://eslint.org/)
- [typescript-eslint](https://typescript-eslint.io/)
- [import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [prettier](https://github.com/prettier/eslint-config-prettier)

We add support of React for browser:

- [react](https://github.com/jsx-eslint/eslint-plugin-react)
- [react-hook](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

We add support of testing tools:

- [vitest](https://github.com/vitest-dev/eslint-plugin-vitest#readme)
- [testing-library](https://github.com/testing-library/eslint-plugin-testing-library)

Also, we add our opinionated rules configuration on top of it.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/eslint-config`.

```bash
pnpm add @tabula/eslint-config --save-dev
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

The package provides utilities to build flat config, also configs and presets, which can be used for build your own
configuration.

The `defineConfig` utility accepts record with config definitions. Each definition is a ESLint flat config itself, or
object with `files`, `ignores` and `configs` fields.

It's function build flat config with defined names to improve debug and readability.

```js
import { defineConfig } from '@tabula/eslint-config';

export default defineConfig({
  typescript: {
    files: ['{src,stories}/**/*.{ts,tsx}'],
    ignores: ['src/**/*.js'],

    configs: presets.typescript(),
  },

  stories: {
    files: ['stories/**/*.{ts,tsx}'],

    rules: {
      'react/no-multi-comp': 'off',
    },
  }
});
```

Also package exports `configs` and `presets` objects, which provide of single configs or configs list.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
