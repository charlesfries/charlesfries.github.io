export default async (request: Request) => {
  const gql = String.raw;

  const query = gql`
    query GetRepositories(
      $sort: RepositoryOrderField!
      $direction: OrderDirection!
    ) {
      user(login: "charlesfries") {
        repositories(
          first: 30
          orderBy: { field: $sort, direction: $direction }
        ) {
          nodes {
            name
            description
            url
            stargazerCount
            forkCount
            isFork
            pushedAt
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const url = new URL(request.url);
    const sort = url.searchParams.get('sort') ?? 'PUSHED_AT';
    const direction = url.searchParams.get('direction') ?? 'DESC';

    const variables = { sort, direction };

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();

    if (!response.ok || data.errors) {
      console.error(data);
      return new Response(JSON.stringify(data.errors ?? data), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const repositories = data.data.user.repositories.nodes;

    const h = response.headers;

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('X-RateLimit-Remaining', h.get('X-RateLimit-Remaining') ?? '');
    headers.set('X-RateLimit-Limit', h.get('X-RateLimit-Limit') ?? '');
    headers.set('X-RateLimit-Reset', h.get('X-RateLimit-Reset') ?? '');

    return new Response(JSON.stringify(repositories), {
      headers,
    });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};
