import { reactHooks as configs } from '../configs/reactHooks';
import { buildConfigs } from '../helpers';
import { FactoryOptions, NamedConfig } from '../types';

export function reactHooks(options: FactoryOptions): Array<NamedConfig> {
  return buildConfigs(options, configs());
}
