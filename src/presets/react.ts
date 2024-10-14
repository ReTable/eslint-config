import { ReactOptions, configs } from '../configs';
import { definePreset } from '../helpers';
import { NamedConfig } from '../types';

export function react(options: ReactOptions): Array<NamedConfig> {
  return definePreset('react', [configs.react(options), configs.jsxA11y(), configs.prettier()]);
}
