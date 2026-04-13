import { on } from '@ember/modifier';
import type Owner from '@ember/owner';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

type _Theme = 'light' | 'dark';

const LOCAL_STORAGE_KEY = 'theme';

export default class Theme extends Component {
  mediaQuery = matchMedia('(prefers-color-scheme: dark)');

  @tracked userTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as _Theme | null;

  constructor(owner: Owner, args: never) {
    super(owner, args);

    this.apply();

    this.mediaQuery.addEventListener('change', this.handleMediaChange);
    addEventListener('storage', this.handleStorageChange);
  }

  willDestroy() {
    super.willDestroy();

    this.mediaQuery.removeEventListener('change', this.handleMediaChange);
    removeEventListener('storage', this.handleStorageChange);
  }

  handleMediaChange = () => {
    if (!this.userTheme) {
      this.apply();
    }
  };

  handleStorageChange = (event: StorageEvent) => {
    if (event.key === LOCAL_STORAGE_KEY) {
      this.userTheme = event.newValue as _Theme | null;
      this.apply();
    }
  };

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
    localStorage.setItem(LOCAL_STORAGE_KEY, this.userTheme);

    this.apply();
  };

  apply = () => {
    const root = document.documentElement;
    const isDark = this.isDark;

    if (isDark === root.classList.contains('dark')) {
      return;
    }

    root.classList.toggle('dark', isDark);
  };

  <template>
    <button
      type="button"
      class="bg-white border border-gray-300 hover:bg-gray-100 [&.active]:bg-gray-200 active:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:[&.active]:bg-gray-600 dark:active:bg-gray-500 font-semibold px-4 py-2 rounded-lg cursor-pointer"
      {{on "click" this.toggle}}
    >
      <FaIcon @icon={{if this.isDark faMoon faSun}} />
    </button>
  </template>
}
