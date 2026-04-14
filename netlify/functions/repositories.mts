export default async (request: Request) => {
  const query = `
    query GetRepositories($sort: RepositoryOrderField!, $direction: OrderDirection!) {
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

  const { sort = 'PUSHED_AT', direction = 'DESC' } = await request.json();
  const variables = { sort, direction };

  try {
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

    return new Response(JSON.stringify(repositories), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};
