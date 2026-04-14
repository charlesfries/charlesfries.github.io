import { on } from '@ember/modifier';
import { service } from '@ember/service';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Component from '@glimmer/component';
import { t, type IntlService } from 'ember-intl';
import { BUTTON_CLASS_NAME } from './toolbar';

const locales = ['en-us', 'zh-cn', 'es-es', 'fr-fr', 'it-it'];

const options = locales.map((locale) => {
  const [lang] = locale.split('-');

  let native = new Intl.DisplayNames([lang!], { type: 'language' }).of(lang!)!;
  native = native.charAt(0).toUpperCase() + native.slice(1);

  return { value: locale, label: native };
});

export default class Locale extends Component {
  @service declare intl: IntlService;

  setLocale = (event: Event) => {
    const { value } = event.target as HTMLSelectElement;
    this.intl.setLocale(value);
  };

  <template>
    <div class="relative">
      <select
        class="{{BUTTON_CLASS_NAME}} rounded-lg appearance-none pr-8"
        aria-label={{t "locale"}}
        {{on "change" this.setLocale}}
      >
        {{#each options as |opt|}}
          <option value={{opt.value}}>{{opt.label}}</option>
        {{/each}}
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-3 flex items-center"
      >
        <FaIcon @icon={{faAngleDown}} />
      </div>
    </div>
  </template>
}
