import typescriptPlugin, { ConfigWithExtends } from 'typescript-eslint';

import { javascript as recommended } from '~/common/javascript';
import { language } from '~/common/language';
import { typescript as prettier } from '~/common/prettier';
import { unicorn } from '~/common/unicorn';
import { user } from '~/common/user';

import { buildConfigs } from '~/helpers';

import type { Config, ECMAVersion, Files, Globals, Ignores, Rules, SourceType } from '~/types';

type ParserOptions = NonNullable<
  NonNullable<ConfigWithExtends['languageOptions']>['parserOptions']
>;

type Project = ParserOptions['project'];

type ProjectService = ParserOptions['projectService'];

type ProjectFolderIgnoreList = ParserOptions['projectFolderIgnoreList'];

type TsConfigRootDir = ParserOptions['tsconfigRootDir'];

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

  globals?: Array<Globals>;

  ecmaVersion?: ECMAVersion;

  sourceType?: SourceType;

  rules?: Rules;

  project?: Project;
  projectService?: ProjectService;
  projectFolderIgnoreList?: ProjectFolderIgnoreList;
  tsconfigRootDir?: TsConfigRootDir;
};

export function typescript({
  ecmaVersion,
  files,
  globals,
  ignores,
  name,
  project,
  projectFolderIgnoreList,
  projectService,
  rules,
  sourceType,
  tsconfigRootDir,
}: Options): Array<Config> {
  const parserOptions: ParserOptions = {};

  let isTyped = false;

  if (project != null) {
    parserOptions.project = project;

    if (tsconfigRootDir != null) {
      parserOptions.tsconfigRootDir = tsconfigRootDir;
    }

    if (projectFolderIgnoreList != null) {
      parserOptions.projectFolderIgnoreList = projectFolderIgnoreList;
    }

    isTyped = true;
  } else if (projectService != null) {
    parserOptions.projectService = projectService;

    isTyped = true;
  }

  const [strict, stylistic] = isTyped
    ? [typescriptPlugin.configs.strictTypeChecked, typescriptPlugin.configs.stylisticTypeChecked]
    : [typescriptPlugin.configs.strict, typescriptPlugin.configs.stylistic];

  return buildConfigs({ name, files, ignores }, [
    language({ ecmaVersion, globals, sourceType, parserOptions }),
    recommended,
    ...(strict as Array<Config>),
    ...(stylistic as Array<Config>),
    unicorn,
    user(rules),
    prettier,
  ]);
}
