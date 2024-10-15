import { ImportXOptions, LanguageOptions, TypescriptOptions, configs } from '../configs';
import { areModulesAvailable, definePreset } from '../helpers';
import { NamedConfig } from '../types';

type Options = {
  importX?: ImportXOptions;

  language?: LanguageOptions;

  typescript?: TypescriptOptions;
};

export function typescript({
  importX,
  language,
  typescript: typescriptOptions,
}: Options = {}): NamedConfig[] {
  const result = [configs.eslint(), configs.typescript(typescriptOptions), configs.unicorn()];

  if (areModulesAvailable(language?.ecmaVersion, language?.sourceType)) {
    const options = { ...importX };

    if (!options.typescript) {
      options.typescript = true;
    }

    result.push(configs.importX(options));
  }

  result.push(configs.prettier(), configs.language(language));

  return definePreset('typescript', result);
}
