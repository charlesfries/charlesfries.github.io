/* eslint-disable @typescript-eslint/no-empty-function */

import EmberRouter from '@ember/routing/router';
import config from 'charlesfries/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
