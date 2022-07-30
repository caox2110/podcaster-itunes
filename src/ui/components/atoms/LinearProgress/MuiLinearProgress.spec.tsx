import type { LinearProgressProps } from '@mui/material/LinearProgress';

import { render } from '@/core/test';
import type { RenderResult } from '@/core/test';

import MuiLinearProgress from './MuiLinearProgress';

const properties = {};

function renderApp({ ...rest }: LinearProgressProps = properties): RenderResult {
  const utils = render(<MuiLinearProgress {...rest} />, { withRouter: true });

  return {
    ...utils,
  };
}

describe('MuiLinearProgress', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });
});
