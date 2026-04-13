import { Context } from '@netlify/functions';

export default (request: Request, context: Context) => {
  try {
    const url = new URL(request.url);
    const subject = url.searchParams.get('name') || 'World';

    return new Response(
      JSON.stringify({
        data: {
          type: 'user',
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
    console.error(error);
    return new Response('Error', {
      status: 500,
    });
  }
};
