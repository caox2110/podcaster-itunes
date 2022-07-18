import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRoutes } from 'react-router-dom';

import { ThemeContainer } from '@/ui';

import { QueryClientFactory, RouterFactory } from '../infrastructure';

function App() {
  const routerElement = useRoutes(RouterFactory.makeRouter());

  return (
    <QueryClientProvider client={QueryClientFactory.makeQueryClient()}>
      <ThemeContainer>
        {routerElement}
        <ReactQueryDevtools initialIsOpen position='top-right' />
      </ThemeContainer>
    </QueryClientProvider>
  );
}

export default App;
