import Route from '@ember/routing/route';
import { service } from '@ember/service';

import type Intl from 'ember-intl/services/intl';

export default class ApplicationRoute extends Route {
  @service declare intl: Intl;

  constructor(...args: any[]) {
    super(...args);

    this.intl.setLocale('en-us');
  }
}
