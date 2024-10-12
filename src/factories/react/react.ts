import { a11yConfig, reactConfigs, reactHooksConfig } from './configs';

import { react as prettier } from '~/common/prettier';
import { user } from '~/common/user';

import { buildConfigs } from '~/helpers';

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
    reactHooksConfig,
    a11yConfig,
    user(rules),
    prettier,
  ]);
}
