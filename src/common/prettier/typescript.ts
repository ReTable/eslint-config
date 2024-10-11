import { buildPrettierConfig } from './buildPrettierConfig';

export const typescript = buildPrettierConfig(
  (name) =>
    name.startsWith('unicorn/') || name.startsWith('@typescript-eslint/') || !name.includes('/'),
);
