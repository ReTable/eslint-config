import { buildPrettierConfig } from './buildPrettierConfig';

export const javascript = buildPrettierConfig(
  'javascript',
  (name) => name.startsWith('unicorn/') || !name.includes('/'),
);
