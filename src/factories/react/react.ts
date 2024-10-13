import { react as prettier } from '../../common/prettier';
import { user } from '../../common/user';
import { areRulesPresented, buildConfigs } from '../../helpers';
import { Config, FactoryOptions, Rules } from '../../types';
import { a11yConfig, reactConfigs } from './configs';

type Options = FactoryOptions & {
  jsxRuntime?: boolean;

  globals?: boolean;

  rules?: Rules;
};

export function react({ globals, jsxRuntime = false, rules, ...options }: Options): Array<Config> {
  const configs: Array<Config> = [...reactConfigs({ globals, jsxRuntime }), a11yConfig];

  if (areRulesPresented(rules)) {
    configs.push(user(rules));
  }

  configs.push(prettier);

  return buildConfigs(options, configs);
}
