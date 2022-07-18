import { HttpRequest, HttpResponse } from '.';

export interface HttpClient<T = any> {
  get: (url: string, data?: HttpRequest) => Promise<HttpResponse<T>>;
}
