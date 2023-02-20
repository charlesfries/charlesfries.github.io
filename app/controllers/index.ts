import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import type { Repo, Sort, Direction, Type } from 'charlesfries/routes/index';
import type RouterService from '@ember/routing/router-service';

export default class IndexController extends Controller {
  declare model: Repo[];

  @service declare router: RouterService;

  queryParams = ['type'];

  @tracked sort: Sort = 'updated';
  @tracked direction: Direction = 'desc';
  @tracked type?: Type;

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
