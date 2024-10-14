import { Linter } from 'eslint';

import globals from 'globals';

export type Config = Linter.Config;

export type NamedConfig = Config & { name: string };

export type ECMAVersion = Linter.EcmaVersion;

export type Globals = keyof typeof globals | Linter.Globals;

export type LanguageOptions = Linter.LanguageOptions;

export type Settings = Record<string, unknown>;

export type SourceType = Linter.SourceType;
