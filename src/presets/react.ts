import { configs } from '../configs';
import { definePreset } from '../helpers';
import { NamedConfig } from '../types';

export function react(): NamedConfig[] {
  return definePreset('react', [configs.react(), configs.jsxA11y(), configs.prettier()]);
}
