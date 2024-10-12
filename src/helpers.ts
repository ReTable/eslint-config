import type { Config, Files, Ignores } from '~/types';

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;
};

export function buildConfigs(
  { name: ns, files, ignores }: Options,
  configs: Array<Config | boolean>,
): Array<Config> {
  return configs
    .filter((it) => typeof it !== 'boolean')
    .map(({ name, ...config }) => {
      const final: Config = {
        ...config,

        name: `${ns}/${name}`,

        files,
      };

      // NOTE: The `eslint` throws an error if `ignores` key are presented, but it equals to `undefined`.
      if (ignores != null) {
        final.ignores = ignores;
      }

      return final;
    });
}
