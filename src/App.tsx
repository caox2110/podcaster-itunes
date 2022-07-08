import { useCallback, useState } from 'react';

import { Page, ThemeContainer } from './ui';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => setCount(() => count + 1), [count]);

  return (
    <ThemeContainer>
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
            </p>
          </header>
        </div>
      </Page>
    </ThemeContainer>
  );
}

export default App;
