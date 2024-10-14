import { JavascriptOptions as ImportXOptions, javascript as importX } from '../common/import-x';
import { user } from '../common/user';
import { LanguageOptions, eslint, language, prettier, unicorn } from '../configs';
import { areModulesAvailable, areRulesPresented, buildConfigs } from '../helpers';
import { Config, FactoryOptions, Rules } from '../types';

type Options = FactoryOptions &
  LanguageOptions & {
    rules?: Rules;

    importXOptions?: ImportXOptions;
  };

export function javascript({
  ecmaVersion = 'latest',
  globals,
  importXOptions,
  rules,
  sourceType = 'module',
  ...options
}: Options): Array<Config> {
  const configs: Array<Config> = [
    ...language({ ecmaVersion, globals, sourceType }),
    ...eslint(),
    ...unicorn(),
  ];

  if (areModulesAvailable(ecmaVersion, sourceType)) {
    configs.push(...importX(importXOptions));
  }

  if (areRulesPresented(rules)) {
    configs.push(user(rules));
  }

  configs.push(...prettier());

  return buildConfigs(options, configs);
}
