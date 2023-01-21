import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

import type Intl from 'ember-intl/services/intl';

export default class ApplicationController extends Controller {
  @service declare intl: Intl;

  @action
  setLocale(event: Event) {
    const { value } = event.target as HTMLSelectElement;
    this.intl.setLocale(value);
  }
}
