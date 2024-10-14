import { ImportXOptions, LanguageOptions, TypescriptOptions, configs } from '../configs';
import { areModulesAvailable, areRulesPresented, buildConfigs } from '../helpers';
import { FactoryOptions, NamedConfig, Rules } from '../types';

type Options = FactoryOptions &
  LanguageOptions &
  TypescriptOptions & {
    rules?: Rules;

    importXOptions?: ImportXOptions;
  };

export function typescript({
  importXOptions,
  ecmaVersion = 'latest',
  globals,
  rules,
  sourceType = 'module',
  parserOptions,
  useTyped,
  ...options
}: Options): Array<NamedConfig> {
  const result: Array<NamedConfig> = [
    ...configs.language({ ecmaVersion, globals, sourceType }),
    ...configs.eslint(),
    ...configs.typescript({ useTyped, parserOptions }),
  ];

  if (areModulesAvailable(ecmaVersion, sourceType)) {
    result.push(...configs.importX(importXOptions));
  }

  result.push(...configs.unicorn());

  if (areRulesPresented(rules)) {
    result.push({
      name: 'user-rules',

      rules,
    });
  }

  result.push(...configs.prettier());

  return buildConfigs(options, result);
}
