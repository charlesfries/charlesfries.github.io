import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import type { Type } from 'charlesfries/routes/index';

export default class IndexController extends Controller {
  queryParams = ['_type'];

  @tracked _type?: Type;
}
