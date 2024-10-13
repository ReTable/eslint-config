import { Settings } from '../../types';

export type Options = {
  coreModules?: Array<string>;
  extensions?: Array<string>;
  externalModuleFolders?: Array<string>;
  ignores?: Array<string>;
};

export function settingsOf({
  coreModules,
  extensions,
  ignores,
  externalModuleFolders,
}: Options = {}): Settings {
  const final: Settings = {};

  if (coreModules != null) {
    final['import-x/core-modules'] = coreModules;
  }

  if (extensions != null) {
    final['import-x/extensions'] = extensions;
  }

  if (ignores != null) {
    final['import-x/ignores'] = ignores;
  }

  if (externalModuleFolders != null) {
    final['import-x/external-module-folders'] = externalModuleFolders;
  }

  return final;
}
