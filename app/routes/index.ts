import Route from '@ember/routing/route';
import sleep from 'charlesfries/utils/sleep';

interface Params {
  sort?: 'created' | 'updated' | 'full_name';
  direction?: 'asc' | 'desc';
  type?: 'sources' | 'forks';
}

export interface Repo {
  fork: boolean;
}

const DELAY = 500;

export default class IndexRoute extends Route {
  queryParams = {
    sort: { refreshModel: true },
    direction: { refreshModel: true },
    type: { refreshModel: false },
  };

  async model({ sort, direction }: Params): Promise<Repo[]> {
    await sleep(DELAY);

    const url = new URL('https://api.github.com/users/charlesfries/repos');

    if (sort) {
      url.searchParams.append('sort', sort);
    }
    if (direction) {
      url.searchParams.append('direction', direction);
    }

    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error('not ok');
    }

    const repositories = await response.json();

    return repositories;
  }
}
