import { Page } from '@/ui';
import { useGetAllPodcastRss } from '@/modules/podcastRss/infrastructure';

import './App.css';

function ExamplePage2() {
  const { isLoading, error, data } = useGetAllPodcastRss('angie');

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>An error has occurred:{error.message}</span>;

  return (
    <Page title='Example Page 2'>
      <div className='app'>
        <header className='app-header'>
          <h1>Hello World</h1>
          <p>{JSON.stringify(data)}</p>
        </header>
      </div>
    </Page>
  );
}

export default ExamplePage2;
