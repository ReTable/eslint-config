import { ReactOptions, react as baseConfigs, jsxA11y, prettier } from '../configs';
import { areRulesPresented, buildConfigs } from '../helpers';
import { Config, FactoryOptions, Rules } from '../types';

type Options = FactoryOptions &
  ReactOptions & {
    rules?: Rules;
  };

export function react({ jsxRuntime, rules, version, ...options }: Options): Array<Config> {
  const configs: Array<Config> = [...baseConfigs({ jsxRuntime, version }), ...jsxA11y()];

  if (areRulesPresented(rules)) {
    configs.push({
      name: 'user-rules',

      rules,
    });
  }

  configs.push(...prettier());

  return buildConfigs(options, configs);
}
