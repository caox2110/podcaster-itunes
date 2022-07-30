import { render } from '@/core/test';
import type { RenderResult } from '@/core/test';

import Loading, { LoadingTypeEnum } from './Loading';

const properties = {
  type: LoadingTypeEnum.linear,
};

function renderApp({ ...rest }: { type?: LoadingTypeEnum } = properties): RenderResult {
  const utils = render(<Loading {...rest} />, { withRouter: true });

  return {
    ...utils,
  };
}

describe('Loading', () => {
  describe('Rendering', () => {
    it('Should render linear loading without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
    it('Should render circular loading without throwing any errors', () => {
      const { baseElement, container } = renderApp({ type: LoadingTypeEnum.circular });

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });
});
