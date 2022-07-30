import { setupServer } from 'msw/node';
import { DefaultBodyType, rest } from 'msw';

type Method = 'get' | 'post' | 'put';

interface MockHandler<T> {
  method: Method;
  endpoint: string;
  httpStatusCode: number;
  response: T | string | T[];
}

/**
 * This configures a request mocking server with the given request handlers.
 */
const server = setupServer();

function addRequestHandlers<T extends DefaultBodyType>(handlers: MockHandler<T>[]) {
  const mwsHandlers = handlers.map((handler) => createMwsHandler(handler));
  server.use(...mwsHandlers);
}

function createMwsHandler<T extends DefaultBodyType>(handler: MockHandler<T>) {
  switch (handler.method) {
    case 'get':
      return rest.get(handler.endpoint, (request, response, context) =>
        response(
          context.status(handler.httpStatusCode),
          typeof handler.response === 'string'
            ? context.text(handler.response)
            : context.json(handler.response),
        ),
      );
    case 'post':
      return rest.post(handler.endpoint, (request, response, context) =>
        response(
          context.status(handler.httpStatusCode),
          typeof handler.response === 'string'
            ? context.text(handler.response)
            : context.json(handler.response),
        ),
      );
    case 'put':
      return rest.put(handler.endpoint, (request, response, context) =>
        response(
          context.status(handler.httpStatusCode),
          typeof handler.response === 'string'
            ? context.text(handler.response)
            : context.json(handler.response),
        ),
      );
  }
}

export { server, addRequestHandlers };
