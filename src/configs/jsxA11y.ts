import plugin from 'eslint-plugin-jsx-a11y';

import { NamedConfig } from '../types';
import { ns } from './helpers';

export function jsxA11y(): Array<NamedConfig> {
  return ns('jsx-a11y', [{ ...plugin.flatConfigs.strict, name: 'strict' }]);
}
