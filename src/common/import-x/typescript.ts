import { Options, settingsOf } from './settingsOf';
import { TsResolverOptions } from 'eslint-import-resolver-typescript';
import { flatConfigs } from 'eslint-plugin-import-x';

import { Config } from '~/types';

type ResolverOptions = Pick<TsResolverOptions, 'alwaysTryTypes' | 'project'>;

export type TypescriptOptions = Options & {
  resolver?: ResolverOptions;
};

export function typescript({ resolver, ...options }: TypescriptOptions = {}): Array<Config> {
  const configs: Array<Config> = [
    {
      ...(flatConfigs.recommended as Config),

      name: 'import-x/recommended',
    },
    {
      ...flatConfigs.typescript,

      name: 'import-x/typescript',
    },
  ];

  const settings = settingsOf(options);

  if (resolver != null) {
    settings['import-x/resolver'] = {
      typescript: resolver,
    };
  }

  if (Object.keys(settings).length > 0) {
    configs.push({
      name: 'import-x/settings',

      settings,
    });
  }

  return configs;
}
