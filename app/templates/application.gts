import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import Avatar from 'charlesfries/components/avatar';
import Description from 'charlesfries/components/description';
import Heading from 'charlesfries/components/heading';
import Locale from 'charlesfries/components/locale';
import Socials from 'charlesfries/components/socials';
import Technologies from 'charlesfries/components/technologies';
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
      <header class="mb-12">
        <div class="flex flex-col gap-8 max-w-lg mx-auto text-center">
          <Avatar />
          <Heading />
          <div class="flex gap-2 mx-auto">
            <Locale />
            <Theme />
          </div>
          <Description />
          <Socials />
          <Technologies />
        </div>
      </header>
      <main>
        <Toolbar @onRefresh={{this.refresh}} />
        {{outlet}}
      </main>
      <footer
        class="border-t border-neutral-300 text-center text-neutral-400 mt-10 pt-4"
      >
        {{t "copyright"}}
      </footer>
    </div>
  </template>
}
