import { Config, Rules } from '~/types';

export function user(rules: Rules): Config {
  return {
    name: 'user-rules',

    rules,
  };
}
