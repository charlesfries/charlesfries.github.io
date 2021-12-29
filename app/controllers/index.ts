import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import type ArrayProxy from '@ember/array/proxy';
import type RepositoryModel from 'charlesfries/models/repository';

export default class IndexController extends Controller {
  declare model: ArrayProxy<RepositoryModel>;

  queryParams = ['filter'];

  @tracked sort = 'updated';
  @tracked direction = 'desc';
  @tracked filter?: string;

  get repositories(): RepositoryModel[] {
    return this.model.filter((repository) => {
      if (this.filter) {
        return repository.fork === (this.filter === 'fork');
      }
      return true;
    });
  }

  @action reload(): void {
    this.model.update();
  }
}
