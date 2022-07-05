import { render, waitFor } from '@testing-library/react';

import { ThemeContainer } from '../..';

import Page from '.';

describe('Page template rendering', () => {
  it('Should render without throwing any errors', () => {
    const { baseElement, container } = render(
      <ThemeContainer>
        <Page title='Main Page'>
          <h1>Testing text</h1>
        </Page>
      </ThemeContainer>,
    );

    expect(baseElement).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
  it('Should load a title after the page rendering', async () => {
    render(
      <ThemeContainer>
        <Page title='Main Page'>
          <h1>Testing text</h1>
        </Page>
      </ThemeContainer>,
    );
    await waitFor(() => expect(document.title).toEqual('Main Page | Podcaster'));
  });
});
