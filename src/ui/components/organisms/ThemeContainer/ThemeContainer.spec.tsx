import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import ThemeContainer from '.';

function renderApp(): RenderResult {
  const utils = render(
    <ThemeContainer>
      <h1>Testing text</h1>
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
});
