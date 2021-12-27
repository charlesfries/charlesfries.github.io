import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://api.github.com';
  namespace = 'users/charlesfries';

  headers = {
    Accept: 'application/json',
  };

  pathForType(type) {
    return 'repos';
  }
}
