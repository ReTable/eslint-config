import { buildPrettierConfig } from './buildPrettierConfig';

export const javascript = buildPrettierConfig(
  (name) => name.startsWith('unicorn/') || !name.includes('/'),
);
