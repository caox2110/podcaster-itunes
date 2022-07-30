import { queryClientConstant } from './queryClient.constant';

const constants = {
  reactQuery: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours,
      staleTime: 1000 * 60 * 60 * 24, // 24 hours,
    },
  },
};

describe('Url constant vars', () => {
  it('Should be a constant vars for set the values to query clients', () => {
    expect(queryClientConstant).toStrictEqual(constants);
    expect(queryClientConstant.reactQuery.queries.cacheTime).toBe(86400000);
    expect(queryClientConstant.reactQuery.queries.staleTime).toBe(86400000);
  });
});
