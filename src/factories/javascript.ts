import { JavascriptOptions as ImportXOptions, javascript as importX } from '../common/import-x';
import { language } from '../common/language';
import { user } from '../common/user';
import { eslint, prettier, unicorn } from '../configs';
import { areModulesAvailable, areRulesPresented, buildConfigs } from '../helpers';
import { Config, ECMAVersion, FactoryOptions, Globals, Rules, SourceType } from '../types';

type Options = FactoryOptions & {
  globals?: Array<Globals>;

  ecmaVersion?: ECMAVersion;

  sourceType?: SourceType;

  rules?: Rules;

  importXOptions?: ImportXOptions;
};

export function javascript({
  ecmaVersion,
  globals,
  importXOptions,
  rules,
  sourceType,
  ...options
}: Options): Array<Config> {
  const configs: Array<Config> = [
    language({ ecmaVersion, globals, sourceType }),
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
