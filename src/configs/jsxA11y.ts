import plugin from 'eslint-plugin-jsx-a11y';

import { defineConfig } from '../helpers';
import { NamedConfig } from '../types';

export function jsxA11y(): NamedConfig[] {
  return defineConfig('jsx-a11y', [{ ...plugin.flatConfigs.strict, name: 'strict' }]);
}
