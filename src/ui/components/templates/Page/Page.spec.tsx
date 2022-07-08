import { render, waitFor } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import { ThemeContainer } from '../..';

import Page from '.';

function renderApp(): RenderResult {
  const utils = render(
    <ThemeContainer>
      <Page title='Main Page'>
        <h1>Testing text</h1>
      </Page>
    </ThemeContainer>,
  );
  return {
    ...utils,
  };
}

describe('Page template rendering', () => {
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
