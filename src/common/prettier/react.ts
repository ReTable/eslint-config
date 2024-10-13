import { buildPrettierConfig } from './buildPrettierConfig';

export const react = buildPrettierConfig('react', (name) => name.startsWith('react/'));
