/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
import { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, queries } from '@testing-library/react';
import type { MemoryRouterProps } from 'react-router-dom';
import type { RenderOptions } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { QueryClientProvider, QueryClient, setLogger } from 'react-query';

import { ThemeContainer } from '@/ui';

import {
  queryByDataTestId,
  getAllByDataTestId,
  getByDataTestId,
  findAllByDataTestId,
  findByDataTestId,
} from './dataTestIdQueries.query';

interface ProviderOptions {
  memoryRouterProperty?: MemoryRouterProps;
  withReactQueryClient?: boolean;
  withRouter?: boolean;
  route?: string;
}

type TestUtilProperties = {
  children: ReactNode;
} & ProviderOptions;

const defaultProps = {
  memoryRouterProperty: { initialEntries: ['/'] },
  route: '/',
  withReactQueryClient: false,
  withRouter: false,
};

setLogger({
  // eslint-disable-next-line no-console
  log: console.log,
  warn: console.warn,
  error: () => {},
});

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryDelay: 1,
      },
    },
  });

function TestUtilWithAllProviders({
  children,
  memoryRouterProperty,
  withReactQueryClient,
  withRouter,
  route,
}: TestUtilProperties) {
  if (withReactQueryClient && withRouter) {
    return (
      <MemoryRouter {...memoryRouterProperty}>
        <QueryClientProvider client={createTestQueryClient()}>
          <ThemeContainer>{children}</ThemeContainer>
        </QueryClientProvider>
      </MemoryRouter>
    );
  }

  if (withReactQueryClient) {
    return (
      <QueryClientProvider client={createTestQueryClient()}>
        <ThemeContainer>{children}</ThemeContainer>
      </QueryClientProvider>
    );
  }

  if (withRouter) {
    window.history.pushState({}, 'Test page', route);
    return (
      <MemoryRouter {...memoryRouterProperty}>
        <ThemeContainer>{children}</ThemeContainer>
      </MemoryRouter>
    );
  }

  return <ThemeContainer>{children}</ThemeContainer>;
}

function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
  );
}

TestUtilWithAllProviders.defaultProps = defaultProps;

const customRender = (
  ui: ReactElement,
  providerOptions?: ProviderOptions,
  options?: Omit<RenderOptions, 'wrapper' | 'queries'>,
) =>
  render(ui, {
    wrapper: (properties) => <TestUtilWithAllProviders {...properties} {...providerOptions} />,
    queries: {
      ...queries,

      queryByDataTestId,
      getAllByDataTestId,
      getByDataTestId,
      findAllByDataTestId,
      findByDataTestId,
    },
    ...options,
  });

const customRenderHook = (hookRender: any) =>
  renderHook(() => hookRender(), {
    wrapper: createWrapper(),
  });

export * from '@testing-library/react';
export * as reactHooks from '@testing-library/react-hooks';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render, customRenderHook as renderHook };

export type { WaitForNextUpdate } from '@testing-library/react-hooks';
