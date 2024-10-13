import plugin from 'eslint-plugin-jsx-a11y';

import { Config } from '../types';

export function jsxA11y(): Array<Config> {
  return [plugin.flatConfigs.strict as Config];
}
