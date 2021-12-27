import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  queryParams = ['type'];

  @tracked type;

  get repositories() {
    return this.model.filter((repository) => {
      if (this.type) {
        return repository.fork === (this.type === 'fork');
      }
      return true;
    });
  }
}
