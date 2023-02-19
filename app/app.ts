import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'charlesfries/config/environment';
import mixpanel from 'mixpanel-browser';
import 'bootstrap';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

mixpanel.init('f537ea51ddb0c79c7e5f339f832e5267', {
  debug: 'development' === config.environment,
});
