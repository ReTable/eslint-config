import { buildPrettierConfig } from './buildPrettierConfig';

export const react = buildPrettierConfig((name) => name.startsWith('react/'));
