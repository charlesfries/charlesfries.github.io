import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

import type Intl from 'ember-intl/services/intl';

export default class Locale extends Component {
  @service declare intl: Intl;

  @action
  setLocale(event: Event) {
    const { value } = event.target as HTMLSelectElement;
    this.intl.setLocale(value);
  }
}
