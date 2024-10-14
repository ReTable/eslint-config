import { ImportXOptions, LanguageOptions, configs } from '../configs';
import { areModulesAvailable, definePreset } from '../helpers';
import { NamedConfig } from '../types';

type Options = {
  importX?: Omit<ImportXOptions, 'typescript'>;

  language?: LanguageOptions;
};

export function javascript({ importX, language }: Options = {}): Array<NamedConfig> {
  const result = [configs.eslint(), configs.unicorn()];

  if (areModulesAvailable(language?.ecmaVersion, language?.sourceType)) {
    result.push(configs.importX(importX));
  }

  result.push(configs.prettier(), configs.language(language));

  return definePreset('javascript', result);
}
