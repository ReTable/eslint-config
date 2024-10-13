import { ConfigWithExtends, configs as typescriptConfigs } from 'typescript-eslint';

import { TypescriptOptions as ImportXOptions, typescript as importX } from '../common/import-x';
import { language } from '../common/language';
import { user } from '../common/user';
import { eslint, prettier, unicorn } from '../configs';
import { areModulesAvailable, areRulesPresented, buildConfigs } from '../helpers';
import { Config, ECMAVersion, FactoryOptions, Globals, Rules, SourceType } from '../types';

export type TypescriptParserOptions = Pick<
  NonNullable<NonNullable<ConfigWithExtends['languageOptions']>['parserOptions']>,
  'project' | 'projectService' | 'projectFolderIgnoreList' | 'tsconfigRootDir'
>;

type Options = FactoryOptions & {
  globals?: Array<Globals>;

  ecmaVersion?: ECMAVersion;

  sourceType?: SourceType;

  rules?: Rules;

  useTyped?: boolean;

  tsParserOptions?: TypescriptParserOptions;

  importXOptions?: ImportXOptions;
};

export function typescript({
  importXOptions,
  ecmaVersion,
  globals,
  rules,
  sourceType,
  tsParserOptions,
  useTyped,
  ...options
}: Options): Array<Config> {
  const configs: Array<Config> = [
    language({ ecmaVersion, globals, sourceType, parserOptions: tsParserOptions }),
    ...eslint(),
  ];

  if (useTyped) {
    configs.push(
      ...(typescriptConfigs.strictTypeChecked as Array<Config>),
      ...(typescriptConfigs.stylisticTypeChecked as Array<Config>),
    );
  } else {
    configs.push(
      ...(typescriptConfigs.strict as Array<Config>),
      ...(typescriptConfigs.stylistic as Array<Config>),
    );
  }

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
