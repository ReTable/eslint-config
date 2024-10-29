import plugin from 'eslint-plugin-react';

import { defineConfig } from '../helpers';
import { Config, NamedConfig } from '../types';

export type Options = {
  jsxRuntime?: boolean;

  version?: string;
};

export function react({ jsxRuntime = true, version = 'detect' }: Options = {}): NamedConfig[] {
  const { flat: configs } = plugin.configs;

  if (configs == null) {
    throw new Error("There no flat configs in the 'eslint-plugin-react'");
  }

  const result: NamedConfig[] = [
    {
      ...(configs.recommended as Config),

      settings: {
        react: { version },
      },

      name: 'recommended',
    },
  ];

  if (jsxRuntime) {
    result.push({
      ...(configs['jsx-runtime'] as Config),

      name: 'jsx-runtime',
    });
  }

  result.push({
    name: 'rules',

    rules: {
      'react/button-has-type': 'error',
      'react/hook-use-state': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-handler-names': [
        'error',
        {
          eventHandlerPrefix: 'handle',
          eventHandlerPropPrefix: 'on',
        },
      ],
      'react/jsx-no-bind': [
        'error',
        {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
          ignoreDOMComponents: true,
        },
      ],
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-duplicate-props': [
        'error',
        {
          ignoreCase: true,
        },
      ],
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: true,
        },
      ],
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'error',
      'react/no-arrow-function-lifecycle': 'error',
      'react/no-invalid-html-attribute': 'error',
      'react/no-namespace': 'error',
      'react/no-redundant-should-component-update': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/no-unused-prop-types': [
        'error',
        {
          skipShapeProps: true,
        },
      ],
      'react/no-unused-state': 'error',
      'react/prefer-stateless-function': [
        'error',
        {
          ignorePureComponents: true,
        },
      ],
      'react/self-closing-comp': 'error',
      'react/sort-comp': [
        'error',
        {
          order: [
            'static-variables',
            'static-methods',
            'instance-variables',
            'lifecycle',
            '/^handle.+$/',
            '/^on.+$/',
            'getters',
            'setters',
            '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
            'instance-methods',
            'everything-else',
            'rendering',
          ],
          groups: {
            lifecycle: [
              'displayName',
              'propTypes',
              'contextTypes',
              'childContextTypes',
              'mixins',
              'statics',
              'defaultProps',
              'constructor',
              'getDefaultProps',
              'getInitialState',
              'state',
              'getChildContext',
              'getDerivedStateFromProps',
              'componentWillMount',
              'UNSAFE_componentWillMount',
              'componentDidMount',
              'componentWillReceiveProps',
              'UNSAFE_componentWillReceiveProps',
              'shouldComponentUpdate',
              'componentWillUpdate',
              'UNSAFE_componentWillUpdate',
              'getSnapshotBeforeUpdate',
              'componentDidUpdate',
              'componentDidCatch',
              'componentWillUnmount',
            ],
            rendering: ['/^render.+$/', 'render'],
          },
        },
      ],
      'react/state-in-constructor': ['error', 'always'],
      'react/static-property-placement': ['error', 'property assignment'],
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',
      'react/no-danger': 'error',
      'react/no-did-mount-set-state': 'error',
      'react/no-did-update-set-state': 'error',
      'react/no-multi-comp': 'error',
      'react/no-will-update-set-state': 'error',

      'react/boolean-prop-naming': [
        'off',
        {
          rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
          message:
            'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
        },
      ],
      'react/prop-types': 'off',
    },
  });

  return defineConfig('react', result);
}
