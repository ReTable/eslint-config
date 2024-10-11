import type { Config, Files, Ignores } from '../types';

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;
};

export function buildConfigs({ name: ns, files, ignores }: Options, configs: Config[]): Config[] {
  return configs.map(({ name, ...config }) => ({
    ...config,

    name: `${ns}/${name}`,

    files,

    ignores,
  }));
}
