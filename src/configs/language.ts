import globals from 'globals';

import { defineConfig } from '../helpers';
import { ECMAVersion, Globals, LanguageOptions, NamedConfig, SourceType } from '../types';

export type Options = {
  ecmaVersion?: ECMAVersion;

  globals?: Globals[];

  sourceType?: SourceType;
};

export function language({
  globals: userGlobals,
  ecmaVersion,
  sourceType,
}: Options = {}): NamedConfig[] {
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

  return defineConfig('language', [
    {
      languageOptions,
    },
  ]);
}
