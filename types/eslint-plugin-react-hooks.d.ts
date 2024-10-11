declare module 'eslint-plugin-react-hooks' {
  import { ESLint, Linter } from 'eslint';

  const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord;
      };
    };
  };

  export default plugin;
}
