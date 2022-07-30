import { configure, cleanup } from '@testing-library/react';

import { server } from './mocks';

configure({ testIdAttribute: 'data-testid', asyncUtilTimeout: 4000 });

global.beforeEach(() => {
  //...
});

global.afterEach(() => {
  cleanup();
});

/**
 * Establish API mocking before all tests.
 */
beforeAll(() => server.listen());
/**
 * Reset any request handlers that we may add during the tests,
 * so they don't affect other tests.
 */
afterEach(() => server.resetHandlers());
/**
 * Clean up after the tests are finished.
 */
afterAll(() => server.close());
