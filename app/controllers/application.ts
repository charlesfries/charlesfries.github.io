import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import type { Direction, Sort } from 'charlesfries/routes/index';

export default class ApplicationController extends Controller {
  @tracked sort: Sort = 'pushed';
  @tracked direction: Direction = 'desc';
}
