import { Config, Rules } from '~/types';

export function user(rules?: Rules): Config | false {
  if (rules == null) {
    return false;
  }

  return {
    name: 'user-rules',

    rules,
  };
}
