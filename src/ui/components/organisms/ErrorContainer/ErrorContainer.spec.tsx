import { ReactElement, ReactNode } from 'react';

import { render, screen } from '@/core/test';
import type { RenderResult } from '@/core/test';

import ErrorContainer from '.';

const properties = {
  error: 'App Error',
};

function renderApp({
  ...rest
}: {
  error: string | ReactElement | ReactNode;
} = properties): RenderResult {
  const utils = render(<ErrorContainer {...rest} />);
  return {
    ...utils,
  };
}

describe('ErrorContainer', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
    it('Should render a children without throwing any errors', () => {
      renderApp();

      expect(screen.getByText(/app error/i)).toBeInTheDocument();
    });
  });
});
