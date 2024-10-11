import type { Linter } from 'eslint';

export type Config = Linter.Config;

export type Globals = 'browser' | 'node';

export type Files = Linter.Config['files'];

export type Ignores = NonNullable<Linter.Config['ignores']>;

export type SourceType = Linter.SourceType;

export type LanguageOptions = Linter.LanguageOptions;
