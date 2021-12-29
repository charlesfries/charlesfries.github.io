import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import sleep from 'charlesfries/utils/sleep';

import type Store from '@ember-data/store';

import type ArrayProxy from '@ember/array/proxy';
import type RepositoryModel from 'charlesfries/models/repository';

interface Params {
  sort?: string;
  direction?: string;
  filter?: string;
}

const DELAY = 600;

export default class IndexRoute extends Route {
  @service declare store: Store;

  queryParams = {
    sort: { refreshModel: true },
    direction: { refreshModel: true },
    filter: { refreshModel: false },
  };

  async model({
    sort,
    direction,
  }: Params): Promise<ArrayProxy<RepositoryModel>> {
    await sleep(DELAY);

    return this.store.query('repository', {
      sort,
      direction,
    });
  }
}
