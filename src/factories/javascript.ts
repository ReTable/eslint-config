import { eslint as recommended } from '../common/eslint';
import { JavascriptOptions as ImportXOptions, javascript as importX } from '../common/import-x';
import { language } from '../common/language';
import { javascript as prettier } from '../common/prettier';
import { unicorn } from '../common/unicorn';
import { user } from '../common/user';
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
  files,
  globals,
  ignores,
  importXOptions,
  name,
  rules,
  sourceType,
}: Options): Array<Config> {
  const configs: Array<Config> = [
    language({ ecmaVersion, globals, sourceType }),
    recommended,
    unicorn,
  ];

  if (areModulesAvailable(ecmaVersion, sourceType)) {
    configs.push(...importX(importXOptions));
  }

  if (areRulesPresented(rules)) {
    configs.push(user(rules));
  }

  configs.push(prettier);

  return buildConfigs({ name, files, ignores }, configs);
}
