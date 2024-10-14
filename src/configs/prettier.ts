import config from 'eslint-config-prettier';

import { NamedConfig } from '../types';
import { ns } from './helpers';

export function prettier(): Array<NamedConfig> {
  return ns('prettier', [config]);
}
