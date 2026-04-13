import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import Component from '@glimmer/component';
import Avatar from 'charlesfries/components/avatar';
import Contact from 'charlesfries/components/contact';
import Description from 'charlesfries/components/description';
import Heading from 'charlesfries/components/heading';
import Locale from 'charlesfries/components/locale';
import Skills from 'charlesfries/components/skills';
import Theme from 'charlesfries/components/theme';
import Toolbar from 'charlesfries/components/toolbar';
import { t } from 'ember-intl';

export default class Application extends Component {
  @service declare router: RouterService;

  refresh = () => {
    this.router.refresh();
  };

  <template>
    <div class="container mx-auto px-4 py-12">
      <header class="mb-20">
        <div class="flex flex-col gap-6 max-w-lg mx-auto text-center">
          <Avatar />
          <Heading />
          <div class="flex gap-2 mx-auto">
            <Locale />
            <Theme />
          </div>
          <Description />
          <Contact />
          <Skills />
        </div>
      </header>
      <main>
        <Toolbar @onRefresh={{this.refresh}} />
        {{outlet}}
        <div class="flex justify-center pt-6">
          <a
            class="bg-blue-700 hover:bg-blue-900 text-white font-semibold px-3 py-2 rounded-lg"
            href="https://github.com/charlesfries"
            role="button"
          >
            <FaIcon
              @icon={{faArrowUpRightFromSquare}}
              class="mr-1"
              role="presentation"
            />
            {{t "more"}}
          </a>
        </div>
      </main>
      <footer
        class="border-t border-gray-300 text-center text-gray-400 mt-6 pt-4"
      >
        © 2026 Charles Fries. All rights reserved.
      </footer>
    </div>
  </template>
}
