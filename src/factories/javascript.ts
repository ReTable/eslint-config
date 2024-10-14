import { ImportXOptions, LanguageOptions, configs } from '../configs';
import { areModulesAvailable, areRulesPresented, buildConfigs } from '../helpers';
import { FactoryOptions, NamedConfig, Rules } from '../types';

type Options = FactoryOptions &
  LanguageOptions & {
    rules?: Rules;

    importXOptions?: Omit<ImportXOptions, 'typescript'>;
  };

export function javascript({
  ecmaVersion = 'latest',
  globals,
  importXOptions,
  rules,
  sourceType = 'module',
  ...options
}: Options): Array<NamedConfig> {
  const result: Array<NamedConfig> = [
    ...configs.language({ ecmaVersion, globals, sourceType }),
    ...configs.eslint(),
    ...configs.unicorn(),
  ];

  if (areModulesAvailable(ecmaVersion, sourceType)) {
    result.push(...configs.importX(importXOptions));
  }

  if (areRulesPresented(rules)) {
    result.push({
      name: 'user-rules',

      rules,
    });
  }

  result.push(...configs.prettier());

  return buildConfigs(options, result);
}
