import { Config, NamedConfig } from '../types';

export function ns(namespace: string, configs: Array<Config>): Array<NamedConfig> {
  const prefix = `config:${namespace}`;

  return configs.map(({ name, ...config }) => ({
    ...config,

    name: name == null ? prefix : `${prefix}/${name}`,
  }));
}
