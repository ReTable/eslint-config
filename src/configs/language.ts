import globals from 'globals';

import type { ECMAVersion, Globals, LanguageOptions, NamedConfig, SourceType } from '../types';
import { ns } from './helpers';

export type Options = {
  ecmaVersion?: ECMAVersion;

  globals?: Array<Globals>;

  sourceType?: SourceType;
};

export function language({
  globals: userGlobals,
  ecmaVersion,
  sourceType,
}: Options = {}): Array<NamedConfig> {
  const languageOptions: LanguageOptions = {
    ecmaVersion,

    sourceType,
  };

  if (userGlobals != null) {
    const all: Globals = {};

    for (const nsOrConfig of userGlobals) {
      const target = typeof nsOrConfig === 'object' ? nsOrConfig : globals[nsOrConfig];

      Object.assign(all, target);
    }

    languageOptions.globals = all;
  }

  return ns('language', [
    {
      languageOptions,
    },
  ]);
}
