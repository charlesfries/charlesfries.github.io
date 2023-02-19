import Route from '@ember/routing/route';
import { service } from '@ember/service';
import mixpanel from 'mixpanel-browser';

import type Intl from 'ember-intl/services/intl';
import type RouterService from '@ember/routing/router-service';

export default class ApplicationRoute extends Route {
  @service declare intl: Intl;
  @service declare router: RouterService;

  constructor(...args: any[]) {
    super(...args);

    this.intl.setLocale('en-us');

    this.router.on('routeDidChange', () => {
      const page = this.router.currentURL;
      const title = this.router.currentRouteName || 'unknown';
      mixpanel.track('Page view', { page, title });
    });
  }
}
