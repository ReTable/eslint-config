import { ECMAVersion, FactoryOptions, NamedConfig, Rules, SourceType } from './types';

export function buildConfigs(
  { name: ns, files, ignores }: FactoryOptions,
  configs: Array<NamedConfig>,
): Array<NamedConfig> {
  return configs.map(({ name, ...config }) => {
    const fullName: Array<string> = [];

    if (ns != null && ns.length > 0) {
      fullName.push(ns);
    }

    fullName.push(name != null && name.length > 0 ? name : 'unnamed');

    const final: NamedConfig = {
      ...config,

      name: fullName.join('/'),

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
