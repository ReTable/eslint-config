import {
  ImportXOptions,
  LanguageOptions,
  eslint,
  importX,
  language,
  prettier,
  unicorn,
} from '../configs';
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
  const configs: Array<NamedConfig> = [
    ...language({ ecmaVersion, globals, sourceType }),
    ...eslint(),
    ...unicorn(),
  ];

  if (areModulesAvailable(ecmaVersion, sourceType)) {
    configs.push(...importX(importXOptions));
  }

  if (areRulesPresented(rules)) {
    configs.push({
      name: 'user-rules',

      rules,
    });
  }

  configs.push(...prettier());

  return buildConfigs(options, configs);
}
