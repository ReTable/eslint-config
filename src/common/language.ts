import globals from 'globals';

import type {
  Config,
  ECMAVersion,
  Globals,
  LanguageOptions,
  ParserOptions,
  SourceType,
} from '../types';

type Options = {
  ecmaVersion?: ECMAVersion;

  globals?: Array<Globals>;

  parserOptions?: ParserOptions;

  sourceType?: SourceType;
};

export function language({
  globals: userGlobals,
  ecmaVersion,
  parserOptions,
  sourceType,
}: Options): Config {
  const languageOptions: LanguageOptions = {
    ecmaVersion,

    parserOptions,

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

  return {
    name: 'language',

    languageOptions,
  };
}
