import { TypeScriptResolverOptions } from 'eslint-import-resolver-typescript';
import { flatConfigs } from 'eslint-plugin-import-x';

import { defineConfig } from '../helpers';
import { Config, NamedConfig, Settings } from '../types';

type ResolverOptions = Pick<TypeScriptResolverOptions, 'alwaysTryTypes' | 'project'>;

export type Options = {
  react?: boolean;
  electron?: boolean;
  typescript?: boolean | ResolverOptions;

  coreModules?: string[];
  extensions?: string[];
  externalModuleFolders?: string[];
  ignores?: string[];
};

export function importX({
  react,
  electron,
  typescript,
  coreModules,
  extensions,
  externalModuleFolders,
  ignores,
}: Options = {}): NamedConfig[] {
  const result: NamedConfig[] = [
    {
      ...(flatConfigs.recommended as NamedConfig),

      name: 'recommended',
    },
  ];

  if (react) {
    result.push({
      ...(flatConfigs.react as Config),

      name: 'react',
    });
  }

  if (electron) {
    result.push({
      ...(flatConfigs.electron as Config),

      name: 'electron',
    });
  }

  if (typescript) {
    const config: NamedConfig = {
      ...(flatConfigs.typescript as Config),

      name: 'typescript',
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
      name: 'settings',

      settings,
    });
  }

  result.push({
    name: 'rules',

    rules: {
      'import-x/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import-x/first': ['error', 'absolute-first'],
      'import-x/named': 'off',
      'import-x/newline-after-import': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-cycle': 'off',
      'import-x/no-duplicates': 'error',
      'import-x/no-self-import': 'error',
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
        },
      ],
    },
  });

  return defineConfig('import-x', result);
}
