import type { CircularProgressProps } from '@mui/material/CircularProgress';

import { render } from '@/core/test';
import type { RenderResult } from '@/core/test';

import MuiCircularProgress from './MuiCircularProgress';

const properties = {};

function renderApp({ ...rest }: CircularProgressProps = properties): RenderResult {
  const utils = render(<MuiCircularProgress {...rest} />, { withRouter: true });

  return {
    ...utils,
  };
}

describe('MuiCircularProgress', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });
});
