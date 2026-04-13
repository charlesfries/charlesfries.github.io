import Route from '@ember/routing/route';
import type { GitHubRepository } from 'charlesfries/utils/github-types';
import sleep from 'charlesfries/utils/sleep';

export type Sort = 'created' | 'updated' | 'pushed' | 'full_name';
export type Direction = 'asc' | 'desc';
export type Type = 'sources' | 'forks';

const DELAY = 500;

export default class IndexRoute extends Route {
  async model() {
    const { sort, direction } = this.paramsFor('application') as {
      sort: Sort;
      direction: Direction;
    };

    await sleep(DELAY);

    const url = new URL('https://api.github.com/users/charlesfries/repos');

    if (sort) {
      url.searchParams.append('sort', sort);
    }
    if (direction) {
      url.searchParams.append('direction', direction);
    }

    // eslint-disable-next-line warp-drive/no-external-request-patterns
    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error('not ok');
    }

    const repositories = (await response.json()) as GitHubRepository[];

    const remainingRequests = response.headers.get('X-RateLimit-Remaining');
    const maxRequests = response.headers.get('X-RateLimit-Limit');
    const resetAt = response.headers.get('X-RateLimit-Reset');

    return {
      repositories,
      remainingRequests:
        typeof remainingRequests === 'string'
          ? Number(remainingRequests)
          : null,
      maxRequests: typeof maxRequests === 'string' ? Number(maxRequests) : null,
      resetAt:
        typeof resetAt === 'string' ? new Date(Number(resetAt) * 1000) : null,
    };
  }
}
