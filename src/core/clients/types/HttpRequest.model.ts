import { HttpMethod } from '..';

export interface HttpRequest {
  method: HttpMethod;
  body?: any;
  headers?: any;
}
