import { eslint } from './eslint';
import { importX } from './importX';
import { jsxA11y } from './jsxA11y';
import { language } from './language';
import { prettier } from './prettier';
import { react } from './react';
import { reactHooks } from './reactHooks';
import { testingLibrary } from './testingLibrary';
import { typescript } from './typescript';
import { unicorn } from './unicorn';
import { vitest } from './vitest';

export const configs = {
  eslint,
  importX,
  jsxA11y,
  language,
  prettier,
  react,
  reactHooks,
  testingLibrary,
  typescript,
  unicorn,
  vitest,
};

export type { Options as ImportXOptions } from './importX';
export type { Options as LanguageOptions } from './language';
export type { Options as ReactOptions } from './react';
export type { Options as TestingLibraryOptions } from './testingLibrary';
export type { Options as TypescriptOptions } from './typescript';
