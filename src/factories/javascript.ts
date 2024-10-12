import { javascript as recommended } from '~/common/javascript';
import { language } from '~/common/language';
import { javascript as prettier } from '~/common/prettier';
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

export function javascript({
  ecmaVersion,
  files,
  globals,
  ignores,
  name,
  rules,
  sourceType,
}: Options): Array<Config> {
  return buildConfigs({ name, files, ignores }, [
    language({ ecmaVersion, globals, sourceType }),
    recommended,
    unicorn,
    user(rules),
    prettier,
  ]);
}
