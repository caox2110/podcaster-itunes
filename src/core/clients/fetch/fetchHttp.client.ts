import { ExceptionHandler } from '@/core/errors';

import { HttpClient, HttpResponse, HttpMethod } from '..';

class FetchHttpClient<T = any> implements HttpClient {
  async get(url: string, options?: Omit<RequestInit, 'method'>): Promise<HttpResponse<T>> {
    const [response, error] = await ExceptionHandler.executeAsync(window.fetch, url, {
      ...options,
      method: HttpMethod.GET,
    });
    if (error) return { status: 403, body: error };
    if (response.ok) {
      const { json } = response;
      const [valueJson, errorJson] = await ExceptionHandler.executeAsync(json.bind(response));
      if (errorJson) return { status: 403, body: errorJson };
      return { status: response.status, body: valueJson };
    }
    const { text } = response;
    const [valueText, errorText] = await ExceptionHandler.executeAsync(text.bind(response));
    if (errorText) return { status: 403, body: errorText };
    return { status: response.status, body: valueText };
  }
}

export { FetchHttpClient };
