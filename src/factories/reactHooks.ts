import { reactHooks as configs } from '../configs/reactHooks';
import { buildConfigs } from '../helpers';
import { Config, FactoryOptions } from '../types';

export function reactHooks(options: FactoryOptions): Array<Config> {
  return buildConfigs(options, configs());
}
