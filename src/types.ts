import { ESLint, Linter } from 'eslint';

import globals from 'globals';

export type Config = Linter.Config;

export type ECMAVersion = Linter.EcmaVersion;

export type FactoryOptions = {
  name?: string;

  files: Files;

  ignores?: Ignores;
};

export type Files = Array<string>;

export type Globals = keyof typeof globals | Linter.Globals;

export type Ignores = Array<string>;

export type LanguageOptions = Linter.LanguageOptions;

export type ParserOptions = Linter.ParserOptions;

export type Plugin = ESLint.Plugin;

export type Rules = Linter.RulesRecord;

export type Settings = Record<string, unknown>;

export type SourceType = Linter.SourceType;
