import { user } from '../common/user';
import { vitest as baseConfigs } from '../configs';
import { areRulesPresented, buildConfigs } from '../helpers';
import { Config, FactoryOptions, Rules } from '../types';

type Options = FactoryOptions & {
  rules?: Rules;
};

export function vitest({ rules, ...options }: Options): Array<Config> {
  const configs: Array<Config> = baseConfigs();

  if (areRulesPresented(rules)) {
    configs.push(user(rules));
  }

  return buildConfigs(options, configs);
}
