import { render, waitFor } from '@/core/test';
import type { RenderResult } from '@/core/test';

import Page from '.';

function renderApp(): RenderResult {
  const utils = render(
    <Page title='Main Page'>
      <h1>Testing text</h1>
    </Page>,
  );
  return {
    ...utils,
  };
}

describe('Page', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
    it('Should load a title after the page rendering', async () => {
      renderApp();
      await waitFor(() => expect(document.title).toEqual('Main Page | Podcaster'));
    });
  });
});
