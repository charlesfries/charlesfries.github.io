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
      class="bg-white border border-gray-300 hover:bg-gray-100 [&.active]:bg-gray-200 active:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:[&.active]:bg-gray-600 dark:active:bg-gray-500 font-semibold px-4 py-2 rounded-lg"
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
