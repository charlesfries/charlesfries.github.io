import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const sleep = (milliseconds) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
        }, milliseconds);
      });
    };

    await sleep(1000);

    return this.store.query('repository', {
      sort: 'updated',
    });
  }
}
