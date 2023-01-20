import Route from '@ember/routing/route';
import sleep from 'charlesfries/utils/sleep';

interface Params {
  sort?: string;
  direction?: string;
  type?: string;
}

const DELAY = 600;

export default class IndexRoute extends Route {
  queryParams = {
    sort: { refreshModel: true },
    direction: { refreshModel: true },
    type: { refreshModel: false },
  };

  async model({ sort, direction }: Params): Promise<unknown[]> {
    await sleep(DELAY);

    const url = new URL('https://api.github.com/users/charlesfries/repos');

    if (sort) {
      url.searchParams.append('sort', sort);
    }
    if (direction) {
      url.searchParams.append('direction', direction);
    }

    const response = await fetch(url.href);
    const repositories = await response.json();

    return repositories;
  }
}
