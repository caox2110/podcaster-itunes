import { render, screen } from '@/core/test';
import type { RenderResult } from '@/core/test';

function renderApp(): RenderResult {
  const utils = render(<h1>Testing text</h1>);
  return {
    ...utils,
  };
}

describe('ThemeContainer', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
    it('Should render a children without throwing any errors', () => {
      renderApp();

      expect(screen.getByText(/testing text/i)).toBeInTheDocument();
    });
  });
});
