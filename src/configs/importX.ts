import { TsResolverOptions } from 'eslint-import-resolver-typescript';
import { flatConfigs } from 'eslint-plugin-import-x';

import { Config, Settings } from '../types';

type ResolverOptions = Pick<TsResolverOptions, 'alwaysTryTypes' | 'project'>;

export type Options = {
  react?: boolean;
  electron?: boolean;
  typescript?: boolean | ResolverOptions;

  coreModules?: Array<string>;
  extensions?: Array<string>;
  externalModuleFolders?: Array<string>;
  ignores?: Array<string>;
};

export function importX({
  react,
  electron,
  typescript,
  coreModules,
  extensions,
  externalModuleFolders,
  ignores,
}: Options = {}): Array<Config> {
  const result: Array<Config> = [
    {
      ...(flatConfigs.recommended as Config),

      name: 'import-x/recommended',
    },
  ];

  if (react) {
    result.push({
      ...(flatConfigs.react as Omit<Config, 'name'>),

      name: 'import-x/react',
    });
  }

  if (electron) {
    result.push({
      ...(flatConfigs.electron as Omit<Config, 'name'>),

      name: 'import-x/electron',
    });
  }

  if (typescript) {
    const config: Config = {
      ...(flatConfigs.typescript as Omit<Config, 'name'>),

      name: 'import-x/typescript',
    };

    if (typeof typescript !== 'boolean') {
      config.settings = {
        'import-x/resolver': {
          typescript,
        },
      };
    }

    result.push(config);
  }

  const settings: Settings = {};

  if (coreModules != null) {
    settings['import-x/core-modules'] = coreModules;
  }

  if (extensions != null) {
    settings['import-x/extensions'] = extensions;
  }

  if (ignores != null) {
    settings['import-x/ignores'] = ignores;
  }

  if (externalModuleFolders != null) {
    settings['import-x/external-module-folders'] = externalModuleFolders;
  }

  if (Object.keys(settings).length > 0) {
    result.push({
      name: 'import-x/settings',

      settings,
    });
  }

  return result;
}
