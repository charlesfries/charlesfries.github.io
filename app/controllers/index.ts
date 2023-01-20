import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import type RouterService from '@ember/routing/router-service';

interface Repo {
  fork: boolean;
}

export default class IndexController extends Controller {
  declare model: Repo[];

  @service declare router: RouterService;

  queryParams = ['type'];

  @tracked sort = 'updated';
  @tracked direction = 'desc';
  @tracked type?: string;

  get repositories(): Repo[] {
    return this.model.filter((repository: Repo) => {
      if (this.type) {
        return repository.fork === (this.type === 'forks');
      }
      return true;
    });
  }

  @action reload(): void {
    this.router.transitionTo({ queryParams: {} });
  }
}
