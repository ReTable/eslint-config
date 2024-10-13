import { Config } from '../../types';
import { Options, settingsOf } from './settingsOf';
import { flatConfigs } from 'eslint-plugin-import-x';

export type JavascriptOptions = Options;

export function javascript(options?: JavascriptOptions): Array<Config> {
  const configs: Array<Config> = [
    {
      ...(flatConfigs.recommended as Config),

      name: 'import-x/recommended',
    },
  ];

  const settings = settingsOf(options);

  if (Object.keys(settings).length > 0) {
    configs.push({
      name: 'import-x/settings',

      settings,
    });
  }

  return configs;
}
