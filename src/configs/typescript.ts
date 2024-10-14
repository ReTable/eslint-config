import plugin, { ConfigWithExtends } from 'typescript-eslint';

import { defineConfig } from '../helpers';
import { NamedConfig } from '../types';

type TypescriptParserOptions = Pick<
  NonNullable<NonNullable<ConfigWithExtends['languageOptions']>['parserOptions']>,
  'project' | 'projectService' | 'projectFolderIgnoreList' | 'tsconfigRootDir'
>;

export type Options = {
  useTyped?: boolean;

  parserOptions?: TypescriptParserOptions;
};

function cleanup(configs: Array<NamedConfig>): Array<NamedConfig> {
  const seen = new Set<string>();

  const result: Array<NamedConfig> = [];

  for (const config of configs) {
    if (seen.has(config.name)) {
      continue;
    }

    seen.add(config.name);

    if (!config.name.startsWith('typescript-eslint/')) {
      result.push(config);

      continue;
    }

    result.push({ ...config, name: config.name.replace(/^(typescript-eslint\/)/, '') });
  }

  return result;
}

export function typescript({ useTyped = true, parserOptions }: Options = {}): Array<NamedConfig> {
  const { strictTypeChecked, stylisticTypeChecked, strict, stylistic } = plugin.configs;

  const configs: Array<NamedConfig> = useTyped
    ? [
        ...(strictTypeChecked as Array<NamedConfig>),
        ...(stylisticTypeChecked as Array<NamedConfig>),
      ]
    : [...(strict as Array<NamedConfig>), ...(stylistic as Array<NamedConfig>)];

  if (parserOptions != null) {
    configs.push({
      name: 'parser-options',

      languageOptions: {
        parserOptions,
      },
    });
  }

  return defineConfig('typescript', cleanup(configs));
}
