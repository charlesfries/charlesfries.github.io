import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

import type RepositoryModel from 'charlesfries/models/repository';

export default class IndexController extends Controller {
  queryParams = ['filter'];

  @tracked sort = 'updated';
  @tracked direction = 'desc';
  @tracked filter?: string;

  get repositories() {
    return this.model.filter((repository: RepositoryModel) => {
      if (this.filter) {
        return repository.fork === (this.filter === 'fork');
      }
      return true;
    });
  }
}
