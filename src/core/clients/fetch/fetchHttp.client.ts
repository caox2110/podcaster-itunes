import { HttpClient, HttpResponse, HttpMethod } from '..';

class FetchHttpClient implements HttpClient {
  async get(url: string, options?: Omit<RequestInit, 'method'>): Promise<HttpResponse> {
    let fetchResponse: Response;
    try {
      fetchResponse = await fetch(url, {
        ...options,
        method: HttpMethod.GET,
      });
      if (fetchResponse.ok) {
        const body = await fetchResponse.json();
        return { status: fetchResponse.status, body };
      }
    } catch (error: unknown) {
      return { status: 403, body: error };
    }
    return { status: 204 };
  }
}

export { FetchHttpClient };
