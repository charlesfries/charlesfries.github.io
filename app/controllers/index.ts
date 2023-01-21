import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import type { Repo } from 'charlesfries/routes';
import type RouterService from '@ember/routing/router-service';

export default class IndexController extends Controller {
  declare model: Repo[];

  @service declare router: RouterService;

  queryParams = ['type'];

  @tracked sort: 'created' | 'updated' | 'full_name' = 'updated';
  @tracked direction: 'asc' | 'desc' = 'desc';
  @tracked type?: 'sources' | 'forks';

  get repositories(): Repo[] {
    return this.model.filter(({ fork }) => {
      if (this.type) {
        return fork === ('forks' === this.type);
      }
      return true;
    });
  }

  @action refresh(): void {
    this.router.refresh();
  }
}
