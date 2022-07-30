import { UseQueryResult } from 'react-query';

import { renderHook, WaitForNextUpdate } from '@/core/test';

import { PodcastRss } from '../../domain';
import { mockPodcastRssCollectionResponse } from '../../test';

import useGetAllPodcastRss from './useGetAllPodcastRss.hook';

type RenderAppType = {
  result: {
    current: UseQueryResult<PodcastRss[], Error>;
  };
  waitForNextUpdate: WaitForNextUpdate;
  unmount: () => void;
};

function renderApp(searchTerm = ''): RenderAppType {
  const { result, waitForNextUpdate, unmount } = renderHook(() => useGetAllPodcastRss(searchTerm));

  return {
    result,
    waitForNextUpdate,
    unmount,
  };
}

afterEach(() => {
  jest.clearAllMocks();
});

describe('useGetAllPodcastRss Hook', () => {
  it('Should return a valid UseQueryResult with array of PodcastRss', async () => {
    mockPodcastRssCollectionResponse();

    const { result, waitForNextUpdate, unmount } = renderApp();

    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);

    expect(result.current.data).not.toBeNull();
    expect(result.current.data).not.toBeUndefined();
    expect(result.current.data).toBeInstanceOf(Array<PodcastRss>);
    unmount();
  });

  it('Should return an empty array of PodcastRss with not valid searchTerm', async () => {
    mockPodcastRssCollectionResponse();

    const { result, waitForNextUpdate, unmount } = renderApp('iidkdkdkkdkd');

    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);

    expect(result.current.data).not.toBeNull();
    expect(result.current.data).not.toBeUndefined();
    expect(result.current.data).toHaveLength(0);
    unmount();
  });

  it('Should return an error message', async () => {
    mockPodcastRssCollectionResponse(500, 'Internal Server Error');

    const { result, waitForNextUpdate, unmount } = renderApp();

    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
    expect(result.current.error).not.toBeNull();
    expect(result.current.error).not.toBeUndefined();
    expect(result.current.data).toBeUndefined();
    unmount();
  });
});
