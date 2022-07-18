import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Page } from '@/ui';
import { useGetAllPodcastRss } from '@/modules/podcastRss/infrastructure';

import logo from './logo.svg';
import './App.css';

function ExamplePage() {
  const { isLoading, error, data } = useGetAllPodcastRss();
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => setCount(() => count + 1), [count]);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <Page title='Main Page'>
      <div className='app'>
        <header className='app-header'>
          <img alt='logo' className='app-logo' src={logo} />
          <p>Hello Vite + React!</p>
          <p>
            <button type='button' onClick={handleCount}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className='app-link'
              href='https://reactjs.org'
              rel='noopener noreferrer'
              target='_blank'
            >
              Learn React
            </a>
            {' | '}
            <a
              className='app-link'
              href='https://vitejs.dev/guide/features.html'
              rel='noopener noreferrer'
              target='_blank'
            >
              Vite Docs
            </a>
            {'|'}
            <Link to='/example2'>Go to example 2</Link>
          </p>
          <p>{JSON.stringify(data)}</p>
        </header>
      </div>
    </Page>
  );
}

export default ExamplePage;
