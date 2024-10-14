import {
  ImportXOptions,
  LanguageOptions,
  TypescriptOptions,
  typescript as baseConfigs,
  eslint,
  importX,
  language,
  prettier,
  unicorn,
} from '../configs';
import { areModulesAvailable, areRulesPresented, buildConfigs } from '../helpers';
import { Config, FactoryOptions, Rules } from '../types';

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
}: Options): Array<Config> {
  const configs: Array<Config> = [
    ...language({ ecmaVersion, globals, sourceType }),
    ...eslint(),
    ...baseConfigs({ useTyped, parserOptions }),
  ];

  if (areModulesAvailable(ecmaVersion, sourceType)) {
    configs.push(...importX(importXOptions));
  }

  configs.push(...unicorn());

  if (areRulesPresented(rules)) {
    configs.push({
      name: 'user-rules',

      rules,
    });
  }

  configs.push(...prettier());

  return buildConfigs(options, configs);
}
