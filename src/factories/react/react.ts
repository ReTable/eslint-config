import { a11yConfig, reactConfigs } from './configs';

import { react as prettier } from '~/common/prettier';
import { user } from '~/common/user';

import { areRulesPresented, buildConfigs } from '~/helpers';

import type { Config, Files, Ignores, Rules } from '~/types';

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

  jsxRuntime?: boolean;

  globals?: boolean;

  rules?: Rules;
};

export function react({
  files,
  globals,
  ignores,
  jsxRuntime = false,
  name,
  rules,
}: Options): Array<Config> {
  return buildConfigs({ name, files, ignores }, [
    ...reactConfigs({ globals, jsxRuntime }),
    a11yConfig,
    areRulesPresented(rules) ? user(rules) : false,
    prettier,
  ]);
}
