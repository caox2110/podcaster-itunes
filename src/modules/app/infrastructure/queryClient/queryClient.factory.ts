import { QueryClient } from 'react-query';

const QueryClientFactory = {
  makeQueryClient: (): QueryClient =>
    new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 1000 * 60 * 60 * 24, // 24 hours,
          staleTime: 1000 * 60 * 60 * 24, // 24 hours,
          refetchOnWindowFocus: false,
        },
      },
    }),
};
export { QueryClientFactory };
