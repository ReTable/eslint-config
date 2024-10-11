declare module 'eslint-plugin-jsx-a11y' {
  import { ESLint, Linter } from 'eslint';

  const plugin: ESLint.Plugin & {
    flatConfigs: {
      recommended: {
        rules: Linter.RulesRecord;
      };
      strict: {
        rules: Linter.RulesRecord;
      };
    };
  };

  export default plugin;
}
