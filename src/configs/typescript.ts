import plugin, { ConfigWithExtends } from 'typescript-eslint';

import { Config } from '../types';

type TypescriptParserOptions = Pick<
  NonNullable<NonNullable<ConfigWithExtends['languageOptions']>['parserOptions']>,
  'project' | 'projectService' | 'projectFolderIgnoreList' | 'tsconfigRootDir'
>;

export type Options = {
  useTyped?: boolean;

  parserOptions?: TypescriptParserOptions;
};

export function typescript({ useTyped = true, parserOptions }: Options = {}): Array<Config> {
  const { strictTypeChecked, stylisticTypeChecked, strict, stylistic } = plugin.configs;

  const configs: Array<Config> = useTyped
    ? [...(strictTypeChecked as Array<Config>), ...(stylisticTypeChecked as Array<Config>)]
    : [...(strict as Array<Config>), ...(stylistic as Array<Config>)];

  if (parserOptions != null) {
    configs.push({
      name: 'typescript/parser-options',

      languageOptions: {
        parserOptions,
      },
    });
  }

  return configs;
}
