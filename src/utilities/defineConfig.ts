import toKebab from 'kebab-case';

import { Config } from '../types';

type Configs = {
  files: Config['files'];

  ignores?: Config['ignores'];

  configs: Array<Config | Config[]>;
};

type Definitions = Record<string, Config | Configs>;

export function defineConfig(definitions: Definitions): Config[] {
  const result: Config[] = [];

  for (const [scope, definition] of Object.entries(definitions)) {
    if ('configs' in definition) {
      for (const config of definition.configs.flat()) {
        const final: Config = { ...config, files: definition.files };

        if (definition.ignores != null) {
          final.ignores = definition.ignores;
        }

        final.name = `scope-${toKebab(scope)}/${toKebab(config.name ?? 'unnamed')}`;

        result.push(final);
      }
    } else {
      result.push({
        ...definition,

        name: `scope-${toKebab(scope)}`,
      });
    }
  }

  return result;
}
