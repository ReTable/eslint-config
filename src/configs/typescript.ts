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

function cleanup(configs: NamedConfig[]): NamedConfig[] {
  const seen = new Set<string>();

  const result: NamedConfig[] = [];

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

export function typescript({ useTyped = true, parserOptions }: Options = {}): NamedConfig[] {
  const { strictTypeChecked, stylisticTypeChecked, strict, stylistic } = plugin.configs;

  const configs: NamedConfig[] = useTyped
    ? [...(strictTypeChecked as NamedConfig[]), ...(stylisticTypeChecked as NamedConfig[])]
    : [...(strict as NamedConfig[]), ...(stylistic as NamedConfig[])];

  if (parserOptions != null) {
    configs.push({
      name: 'parser-options',

      languageOptions: {
        parserOptions,
      },
    });
  }

  configs.push({
    name: 'rules',

    rules: {
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple',
          readonly: 'array-simple',
        },
      ],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'no-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': [
        'error',
        {
          allowArgumentsExplicitlyTypedAsAny: false,
          allowDirectConstAssertionInArrowFunctions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      '@typescript-eslint/init-declarations': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-invalid-this': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-shadow': [
        'error',
        {
          builtinGlobals: false,
        },
      ],
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',

      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
    },
  });

  return defineConfig('typescript', cleanup(configs));
}
