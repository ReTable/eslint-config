import { buildPrettierConfig } from './buildPrettierConfig';

export const typescript = buildPrettierConfig(
  'typescript',
  (name) =>
    name.startsWith('unicorn/') || name.startsWith('@typescript-eslint/') || !name.includes('/'),
);
