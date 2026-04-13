export default async () => {
  const query = `
    query {
      user(login: "charlesfries") {
        repositories(first: 30, orderBy: { field: PUSHED_AT, direction: DESC }) {
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
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const repositories = data.data.user.repositories.nodes;

    return new Response(JSON.stringify(repositories), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};
