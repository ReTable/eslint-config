import plugin, { ConfigWithExtends } from 'typescript-eslint';

import { NamedConfig } from '../types';
import { ns } from './helpers';

type TypescriptParserOptions = Pick<
  NonNullable<NonNullable<ConfigWithExtends['languageOptions']>['parserOptions']>,
  'project' | 'projectService' | 'projectFolderIgnoreList' | 'tsconfigRootDir'
>;

export type Options = {
  useTyped?: boolean;

  parserOptions?: TypescriptParserOptions;
};

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

  return ns(
    'typescript',
    configs.map((config) => {
      if (!config.name.startsWith('typescript-eslint/')) {
        return config;
      }

      return { ...config, name: config.name.replace(/^(typescript-eslint\/)/, '') };
    }),
  );
}
