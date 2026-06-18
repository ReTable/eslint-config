---
'@tabula/eslint-config': major
---

Migrate from `eslint-plugin-react` and `eslint-plugin-react-hooks` to the unified
[`@eslint-react/eslint-plugin`](https://github.com/Rel1cx/eslint-react).

The `configs.react` now exposes the `recommended-typescript` preset from
`@eslint-react`, which already bundles the React Hooks rules (`rules-of-hooks`
and `exhaustive-deps`).

### Breaking Changes

- `eslint-plugin-react` and `eslint-plugin-react-hooks` are no longer
  dependencies. Rule identifiers change from `react/*` and `react-hooks/*` to
  `@eslint-react/*` (see the upstream
  [migration guide](https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react)).
- `configs.reactHooks` has been removed. Its functionality is now part of
  `configs.react`.
- `configs.react` and `presets.react` no longer accept the `jsxRuntime` and
  `version` options. The new plugin defaults to the automatic JSX runtime and
  auto-detects the React version.
- The `ReactOptions` type export has been removed.
