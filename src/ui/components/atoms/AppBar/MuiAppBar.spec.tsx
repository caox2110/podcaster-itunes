import type { AppBarProps } from '@mui/material/AppBar';

import { render } from '@/core/test';
import type { RenderResult } from '@/core/test';

import MuiAppBar from './MuiAppBar';

const properties = {};

function renderApp({ ...rest }: AppBarProps = properties): RenderResult {
  const utils = render(<MuiAppBar {...rest} />, { withRouter: true });

  return {
    ...utils,
  };
}

describe('MuiAppBar', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });
});
