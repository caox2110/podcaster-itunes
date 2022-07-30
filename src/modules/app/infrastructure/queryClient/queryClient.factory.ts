import { QueryClient } from 'react-query/core';

import { constants } from '@/core/constants';

const {
  queryClient: {
    reactQuery: {
      queries: { cacheTime, staleTime },
    },
  },
} = constants;

const QueryClientFactory = {
  makeQueryClient: (): QueryClient =>
    new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime, // 24 hours,
          staleTime, // 24 hours,
          refetchOnWindowFocus: false,
        },
      },
    }),
};
export { QueryClientFactory };
