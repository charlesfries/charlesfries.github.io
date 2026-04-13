import { Context } from '@netlify/functions';

export default (request: Request, context: Context) => {
  try {
    const url = new URL(request.url);
    const subject = url.searchParams.get('name') || 'World';

    return new Response(
      JSON.stringify({
        data: {
          type: 'post',
          id: '1',
          attributes: { message: `Hello ${subject}` },
        },
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    return new Response((error as Error).toString(), {
      status: 500,
    });
  }
};
