import { withDefaults } from '@warp-drive/core/reactive';
import type { Type } from '@warp-drive/core/types/symbols';
import { JSONAPICache } from '@warp-drive/json-api';
import { useLegacyStore } from '@warp-drive/legacy';
import { type WithLegacy } from '@warp-drive/legacy/model/migration-support';

const RepositorySchema = withDefaults({
  type: 'repository',
  fields: [
    { kind: 'field', name: 'name' },
    { kind: 'field', name: 'description' },
    { kind: 'field', name: 'url' },
    { kind: 'field', name: 'stargazerCount' },
    { kind: 'field', name: 'forkCount' },
    { kind: 'field', name: 'isFork' },
    { kind: 'field', name: 'pushedAt' },
    { kind: 'field', name: 'primaryLanguage' },
  ],
});

export type Repository = WithLegacy<{
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  isFork: boolean;
  pushedAt: string;
  primaryLanguage: {
    name: string;
  };
  [Type]: 'repository';
}>;

const Store = useLegacyStore({
  linksMode: false,
  cache: JSONAPICache,
  handlers: [
    // -- your handlers here
  ],
  schemas: [
    RepositorySchema,
    // -- your schemas here
  ],
});

type Store = InstanceType<typeof Store>;

export default Store;
