import { Config, ECMAVersion, NamedConfig, SourceType } from './types';

export function areModulesAvailable(ecmaVersion?: ECMAVersion, sourceType?: SourceType): boolean {
  return (
    (ecmaVersion == null || ecmaVersion === 'latest' || ecmaVersion >= 2018) &&
    (sourceType == null || sourceType === 'module')
  );
}

function ns(namespace: string, configs: Config[]): NamedConfig[] {
  return configs.map(({ name, ...config }) => ({
    ...config,

    name: name == null ? namespace : `${namespace}/${name}`,
  }));
}

export function defineConfig(namespace: string, configs: Config[]): NamedConfig[] {
  return ns(`config-${namespace}`, configs);
}

export function definePreset(namespace: string, configs: Array<Config | Config[]>): NamedConfig[] {
  return ns(`preset-${namespace}`, configs.flat());
}
