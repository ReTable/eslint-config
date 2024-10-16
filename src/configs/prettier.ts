import config from 'eslint-config-prettier';

import { defineConfig } from '../helpers';
import { NamedConfig } from '../types';

export function prettier(): NamedConfig[] {
  return defineConfig('prettier', [config]);
}
