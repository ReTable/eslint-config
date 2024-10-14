import { ReactOptions, configs } from '../configs';
import { areRulesPresented, buildConfigs } from '../helpers';
import { FactoryOptions, NamedConfig, Rules } from '../types';

type Options = FactoryOptions &
  ReactOptions & {
    rules?: Rules;
  };

export function react({ jsxRuntime, rules, version, ...options }: Options): Array<NamedConfig> {
  const result: Array<NamedConfig> = [
    ...configs.react({ jsxRuntime, version }),
    ...configs.jsxA11y(),
  ];

  if (areRulesPresented(rules)) {
    result.push({
      name: 'user-rules',

      rules,
    });
  }

  result.push(...configs.prettier());

  return buildConfigs(options, result);
}
