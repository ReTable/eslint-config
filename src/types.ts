import type { ESLint, Linter } from 'eslint';
import type globals from 'globals';

export type Config = Linter.Config & { name: string };

export type ECMAVersion = Linter.EcmaVersion;

export type Files = Linter.Config['files'];

export type Globals = keyof typeof globals | Linter.Globals;

export type Ignores = NonNullable<Linter.Config['ignores']>;

export type LanguageOptions = Linter.LanguageOptions;

export type ParserOptions = Linter.ParserOptions;

export type Plugin = ESLint.Plugin;

export type Rules = Linter.RulesRecord;

export type SourceType = Linter.SourceType;
