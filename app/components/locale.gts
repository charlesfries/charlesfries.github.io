import { on } from '@ember/modifier';
import { service } from '@ember/service';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Component from '@glimmer/component';
import { t, type IntlService as Intl } from 'ember-intl';
import { BUTTON_CLASS_NAME } from './toolbar';

export default class Locale extends Component {
  @service declare intl: Intl;

  setLocale = (event: Event) => {
    const { value } = event.target as HTMLSelectElement;
    this.intl.setLocale(value);
  };

  <template>
    {{! template-lint-disable no-bare-strings  }}

    <div class="relative">
      <select
        class="{{BUTTON_CLASS_NAME}} rounded-lg appearance-none pr-8"
        aria-label={{t "locale"}}
        {{on "change" this.setLocale}}
      >
        <option value="en-us">English</option>
        <option value="zh-cn">中文</option>
        <option value="es-es">Español</option>
        <option value="fr-fr">Français</option>
        <option value="it-it">Italiano</option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-3 flex items-center"
      >
        <FaIcon @icon={{faAngleDown}} />
      </div>
    </div>
  </template>
}
