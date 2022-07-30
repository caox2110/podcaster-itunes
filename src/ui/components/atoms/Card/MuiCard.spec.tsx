import type { CardProps } from '@mui/material/Card';

import { render } from '@/core/test';
import type { RenderResult } from '@/core/test';

import MuiCard from './MuiCard';

const properties = {};

function renderApp({ ...rest }: CardProps = properties): RenderResult {
  const utils = render(<MuiCard {...rest} />, { withRouter: true });

  return {
    ...utils,
  };
}

describe('MuiCard', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });
});
