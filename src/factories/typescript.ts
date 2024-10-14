import { TypescriptOptions as ImportXOptions, typescript as importX } from '../common/import-x';
import { language } from '../common/language';
import { user } from '../common/user';
import {
  TypescriptOptions,
  typescript as baseConfigs,
  eslint,
  prettier,
  unicorn,
} from '../configs';
import { areModulesAvailable, areRulesPresented, buildConfigs } from '../helpers';
import { Config, ECMAVersion, FactoryOptions, Globals, Rules, SourceType } from '../types';

type Options = FactoryOptions &
  TypescriptOptions & {
    globals?: Array<Globals>;

    ecmaVersion?: ECMAVersion;

    sourceType?: SourceType;

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
    language({ ecmaVersion, globals, sourceType }),
    ...eslint(),
    ...baseConfigs({ useTyped, parserOptions }),
  ];

  if (areModulesAvailable(ecmaVersion, sourceType)) {
    configs.push(...importX(importXOptions));
  }

  configs.push(...unicorn());

  if (areRulesPresented(rules)) {
    configs.push(user(rules));
  }

  configs.push(...prettier());

  return buildConfigs(options, configs);
}
