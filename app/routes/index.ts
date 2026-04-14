import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query, setBuildURLConfig } from '@warp-drive/utilities/json-api';
import type Store from 'charlesfries/services/store';
import type { Repository } from 'charlesfries/services/store';

export type Sort = 'CREATED_AT' | 'UPDATED_AT' | 'PUSHED_AT' | 'NAME';
export type Direction = 'ASC' | 'DESC';
export type Type = 'sources' | 'forks';

setBuildURLConfig({
  host: null,
  namespace: 'api/v1',
});

export default class IndexRoute extends Route {
  @service declare store: Store;

  async model() {
    const { sort, direction } = this.paramsFor('application') as {
      sort: Sort;
      direction: Direction;
    };

    const url = new URL('/api/v1/repositories', location.origin);
    url.searchParams.append('sort', sort);
    url.searchParams.append('direction', direction);

    const { response, content } = await this.store.request(
      query<Repository>(
        'repository',
        { sort, direction },
        { backgroundReload: true },
      ),
    );

    const remainingRequests = response?.headers.get('X-RateLimit-Remaining');
    const maxRequests = response?.headers.get('X-RateLimit-Limit');
    const resetAt = response?.headers.get('X-RateLimit-Reset');

    return {
      repositories: content.data,
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
