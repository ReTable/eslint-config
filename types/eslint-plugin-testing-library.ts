declare module 'eslint-plugin-testing-library' {
  import { FixupPluginDefinition } from '@eslint/compat';
  import { Linter } from 'eslint';

  const plugin: FixupPluginDefinition & {
    configs: {
      'flat/dom': {
        rules: Linter.RulesRecord;
      };
      'flat/react': {
        rules: Linter.RulesRecord;
      };
    };
  };

  export default plugin;
}
