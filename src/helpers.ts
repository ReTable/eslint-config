import type { Config, ECMAVersion, Files, Ignores, Rules, SourceType } from '~/types';

type BuildConfigsOptions = {
  name: string;

  files: Files;

  ignores?: Ignores;
};

export function buildConfigs(
  { name: ns, files, ignores }: BuildConfigsOptions,
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

export function areModulesAvailable(ecmaVersion?: ECMAVersion, sourceType?: SourceType): boolean {
  return (
    (ecmaVersion == null || ecmaVersion === 'latest' || ecmaVersion >= 2018) &&
    (sourceType == null || sourceType === 'module')
  );
}

export function areRulesPresented(rules?: Rules): rules is Rules {
  return rules != null && Object.keys(rules).length > 0;
}
