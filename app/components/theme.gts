import { on } from '@ember/modifier';
import type Owner from '@ember/owner';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Component from '@glimmer/component';

export default class Theme extends Component {
  constructor(owner: Owner, args: never) {
    super(owner, args);

    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  get isDark() {
    const storedTheme = localStorage.getItem('theme');
    const isSystemDark = matchMedia('(prefers-color-scheme: dark)').matches;

    return storedTheme === 'dark' || (!storedTheme && isSystemDark);
  }

  toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  <template>
    <button
      type="button"
      class="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2 rounded-lg cursor-pointer"
      {{on "click" this.toggle}}
    >
      <FaIcon @icon={{if this.isDark faMoon faSun}} />
    </button>
  </template>
}
