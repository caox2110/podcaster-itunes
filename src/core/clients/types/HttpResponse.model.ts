import { HttpStatusCode } from '..';

export interface HttpResponse<T = any> {
  status: HttpStatusCode;
  body?: T;
}
