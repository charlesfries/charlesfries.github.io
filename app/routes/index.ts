import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import type Store from '@ember-data/store';

interface Params {
  sort?: string;
  direction?: string;
  filter?: string;
}

export default class IndexRoute extends Route {
  @service declare store: Store;

  queryParams = {
    sort: { refreshModel: true },
    direction: { refreshModel: true },
    filter: { refreshModel: false },
  };

  async model({ sort, direction }: Params) {
    // const sleep = (milliseconds) => {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(null);
    //     }, milliseconds);
    //   });
    // };

    // await sleep(1000);

    return this.store.query('repository', {
      sort,
      direction,
    });
  }
}
