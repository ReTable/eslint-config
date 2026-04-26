declare module 'eslint-plugin-jsx-a11y' {
  import { ESLint, Linter } from 'eslint';

  const plugin: ESLint.Plugin & {
    configs: {
      recommended: Linter.LegacyConfig;
      strict: Linter.LegacyConfig;
    };
    flatConfigs: {
      recommended: Linter.Config;
      strict: Linter.Config;
    };
  };

  export default plugin;
}
