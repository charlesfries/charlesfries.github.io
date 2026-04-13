import { on } from '@ember/modifier';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { t, type IntlService as Intl } from 'ember-intl';

export default class Locale extends Component {
  @service declare intl: Intl;

  setLocale = (event: Event) => {
    const { value } = event.target as HTMLSelectElement;
    this.intl.setLocale(value);
  };

  <template>
    {{! template-lint-disable no-bare-strings  }}

    <select
      class="form-select w-auto mb-3"
      aria-label={{t "locale"}}
      {{on "change" this.setLocale}}
    >
      <option value="en-us">English</option>
      <option value="zh-cn">中文</option>
      <option value="es-es">Español</option>
      <option value="fr-fr">Français</option>
      <option value="it-it">Italiano</option>
    </select>
  </template>
}
