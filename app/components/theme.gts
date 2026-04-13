import { on } from '@ember/modifier';
import type Owner from '@ember/owner';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

type _Theme = 'light' | 'dark';

export default class Theme extends Component {
  mediaQuery = matchMedia('(prefers-color-scheme: dark)');

  @tracked userTheme = localStorage.getItem('theme') as _Theme | null;

  constructor(owner: Owner, args: never) {
    super(owner, args);

    this.apply();

    this.mediaQuery.addEventListener('change', () => {
      this.apply();
    });
  }

  get systemTheme() {
    return (this.mediaQuery.matches ? 'dark' : 'light') as _Theme;
  }

  get isDark() {
    if (this.userTheme) {
      return this.userTheme === 'dark';
    }
    return this.systemTheme === 'dark';
  }

  toggle = () => {
    this.userTheme = this.isDark ? 'light' : 'dark';
    localStorage.setItem('theme', this.userTheme);

    this.apply();
  };

  apply = () => {
    const root = document.documentElement;

    if (this.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
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
