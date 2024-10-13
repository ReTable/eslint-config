import { user } from '../../common/user';
import { jsxA11y, prettier } from '../../configs';
import { areRulesPresented, buildConfigs } from '../../helpers';
import { Config, FactoryOptions, Rules } from '../../types';
import { reactConfigs } from './configs';

type Options = FactoryOptions & {
  jsxRuntime?: boolean;

  globals?: boolean;

  rules?: Rules;
};

export function react({ globals, jsxRuntime = false, rules, ...options }: Options): Array<Config> {
  const configs: Array<Config> = [...reactConfigs({ globals, jsxRuntime }), ...jsxA11y()];

  if (areRulesPresented(rules)) {
    configs.push(user(rules));
  }

  configs.push(...prettier());

  return buildConfigs(options, configs);
}
