import { testingLibrary as baseConfigs } from '../configs';
import { areRulesPresented, buildConfigs } from '../helpers';
import { Config, FactoryOptions, Rules } from '../types';

type Options = FactoryOptions & {
  rules?: Rules;
};

export function testingLibrary({ rules, ...options }: Options): Array<Config> {
  const configs: Array<Config> = baseConfigs({ library: 'react' });

  if (areRulesPresented(rules)) {
    configs.push({
      name: 'user-rules',

      rules,
    });
  }

  return buildConfigs(options, configs);
}
