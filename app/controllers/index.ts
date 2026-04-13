import Controller from '@ember/controller';
import { action } from '@ember/object';
import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import type { Direction, Sort, Type } from 'charlesfries/routes/index';
import type { GitHubRepository } from 'charlesfries/utils/github';

export default class IndexController extends Controller {
  declare model: GitHubRepository[];

  @service declare router: RouterService;

  queryParams = ['type'];

  @tracked sort: Sort = 'pushed';
  @tracked direction: Direction = 'desc';
  @tracked type?: Type;

  get repositories(): GitHubRepository[] {
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
