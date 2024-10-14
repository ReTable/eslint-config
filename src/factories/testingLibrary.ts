import { configs } from '../configs';
import { areRulesPresented, buildConfigs } from '../helpers';
import { FactoryOptions, NamedConfig, Rules } from '../types';

type Options = FactoryOptions & {
  rules?: Rules;
};

export function testingLibrary({ rules, ...options }: Options): Array<NamedConfig> {
  const result: Array<NamedConfig> = configs.testingLibrary({ library: 'react' });

  if (areRulesPresented(rules)) {
    result.push({
      name: 'user-rules',

      rules,
    });
  }

  return buildConfigs(options, result);
}
