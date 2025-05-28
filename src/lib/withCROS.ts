export function withCORS(res: Response): Response {
    res.headers.set('Access-Control-Allow-Origin', `${process.env.NEXT_PUBLIC_APP_URL}`);
    res.headers.set('Access-Control-Allow-Credentials', 'true');
    return res;
  }
  