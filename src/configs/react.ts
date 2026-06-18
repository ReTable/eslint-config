import plugin from '@eslint-react/eslint-plugin';

import { defineConfig } from '../helpers';
import { Config, NamedConfig } from '../types';

export function react(): NamedConfig[] {
  return defineConfig('react', [plugin.configs['recommended-typescript'] as Config]);
}
