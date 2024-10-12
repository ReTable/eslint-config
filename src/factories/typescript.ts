import javascriptPlugin from '@eslint/js';

import { language } from '~/common/language';
import { typescript as prettier } from '~/common/prettier';
import { unicorn } from '~/common/unicorn';
import { user } from '~/common/user';
import { buildConfigs } from '~/helpers';
import type { Config, ECMAVersion, Files, Globals, Ignores, Rules, SourceType } from '~/types';

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

  globals?: Array<Globals>;

  ecmaVersion?: ECMAVersion;

  sourceType?: SourceType;

  rules?: Rules;
};

export function typescript({
  ecmaVersion,
  files,
  globals,
  ignores,
  name,
  rules,
  sourceType,
}: Options): Config[] {
  return buildConfigs({ name, files, ignores }, [
    language({ ecmaVersion, globals, sourceType }),
    {
      name: 'javascript/recommended',

      rules: javascriptPlugin.configs.recommended.rules,
    },
    unicorn,
    user(rules),
    prettier,
  ]);
}
