import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
    <div class="container mx-auto py-12">
      <header class="grid grid-cols-4 mb-12">
        <div class="col-span-2">
          <Heading />
          <div class="flex gap-2 mb-4">
            <Locale />
            <Theme />
          </div>
          <Description />
          <Contact />
          <Skills />
        </div>
        <div class="col-start-4">
          <Avatar />
        </div>
      </header>
      <Toolbar @onRefresh={{this.refresh}} />
      {{outlet}}
      <footer class="flex pt-6">
        <a
          class="bg-blue-700 hover:bg-blue-900 text-white font-semibold px-3 py-2 rounded-lg"
          href="https://github.com/charlesfries"
          role="button"
        >
          {{t "more"}}
          <FaIcon @icon={{faArrowRight}} class="ml-1" role="presentation" />
        </a>
      </footer>
    </div>
  </template>
}
