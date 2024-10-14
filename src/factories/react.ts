import { ReactOptions, react as baseConfigs, jsxA11y, prettier } from '../configs';
import { areRulesPresented, buildConfigs } from '../helpers';
import { FactoryOptions, NamedConfig, Rules } from '../types';

type Options = FactoryOptions &
  ReactOptions & {
    rules?: Rules;
  };

export function react({ jsxRuntime, rules, version, ...options }: Options): Array<NamedConfig> {
  const configs: Array<NamedConfig> = [...baseConfigs({ jsxRuntime, version }), ...jsxA11y()];

  if (areRulesPresented(rules)) {
    configs.push({
      name: 'user-rules',

      rules,
    });
  }

  configs.push(...prettier());

  return buildConfigs(options, configs);
}
