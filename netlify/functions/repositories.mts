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
            id
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

    const repositories = data.data.user.repositories.nodes as { id: string }[];

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    const forwardHeaders = [
      'X-RateLimit-Remaining',
      'X-RateLimit-Limit',
      'X-RateLimit-Reset',
    ];

    for (const name of forwardHeaders) {
      const value = response.headers.get(name);
      if (value) {
        headers.set(name, value);
      }
    }

    const body = {
      data: repositories.map(({ id, ...attributes }) => ({
        type: 'repository',
        id,
        attributes,
      })),
    };

    return new Response(JSON.stringify(body), { headers });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};
