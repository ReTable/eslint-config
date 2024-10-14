import globals from 'globals';

import type { Config, ECMAVersion, Globals, LanguageOptions, SourceType } from '../types';

export type Options = {
  ecmaVersion?: ECMAVersion;

  globals?: Array<Globals>;

  sourceType?: SourceType;
};

export function language({
  globals: userGlobals,
  ecmaVersion,
  sourceType,
}: Options = {}): Array<Config> {
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

  return [
    {
      name: 'language',

      languageOptions,
    },
  ];
}
