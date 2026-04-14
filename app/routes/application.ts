import Route from '@ember/routing/route';
import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import { type IntlService as Intl } from 'ember-intl';
import mixpanel from 'mixpanel-browser';

export default class ApplicationRoute extends Route {
  @service declare intl: Intl;
  @service declare router: RouterService;

  queryParams = {
    sort: { refreshModel: true },
    direction: { refreshModel: true },
  };

  constructor(...args: never[]) {
    super(...args);

    this.intl.setLocale('en-us');

    this.router.on('routeDidChange', () => {
      const page = this.router.currentURL;
      const title = this.router.currentRouteName || 'unknown';
      mixpanel.track('Page view', { page, title });
    });
  }
}
