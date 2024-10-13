import { ConfigWithExtends, configs as typescriptConfigs } from 'typescript-eslint';

import { TypescriptOptions as ImportXOptions, typescript as importX } from '~/common/import-x';
import { javascript as recommended } from '~/common/javascript';
import { language } from '~/common/language';
import { typescript as prettier } from '~/common/prettier';
import { unicorn } from '~/common/unicorn';
import { user } from '~/common/user';

import { areModulesAvailable, areRulesPresented, buildConfigs } from '~/helpers';

import { Config, ECMAVersion, Files, Globals, Ignores, Rules, SourceType } from '~/types';

export type TypescriptParserOptions = Pick<
  NonNullable<NonNullable<ConfigWithExtends['languageOptions']>['parserOptions']>,
  'project' | 'projectService' | 'projectFolderIgnoreList' | 'tsconfigRootDir'
>;

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

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
  files,
  globals,
  ignores,
  name,
  rules,
  sourceType,
  tsParserOptions,
  useTyped,
}: Options): Array<Config> {
  const configs: Array<Config> = [
    language({ ecmaVersion, globals, sourceType, parserOptions: tsParserOptions }),
    recommended,
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

  configs.push(unicorn);

  if (areRulesPresented(rules)) {
    configs.push(user(rules));
  }

  configs.push(prettier);

  return buildConfigs({ name, files, ignores }, configs);
}
