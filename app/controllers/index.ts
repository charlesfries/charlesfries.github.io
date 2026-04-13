import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import type { Direction, Sort, Type } from 'charlesfries/routes/index';

export default class IndexController extends Controller {
  queryParams = ['type'];

  @tracked sort: Sort = 'pushed';
  @tracked direction: Direction = 'desc';
  @tracked type?: Type;
}
