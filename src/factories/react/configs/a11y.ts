import { Config } from '../../../types';
import plugin from 'eslint-plugin-jsx-a11y';

export const a11yConfig: Config = {
  name: 'a11y/strict',

  plugins: {
    'jsx-a11y': plugin,
  },

  rules: plugin.flatConfigs.strict.rules,
};
