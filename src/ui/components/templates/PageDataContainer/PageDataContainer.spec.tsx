import { render } from '@/core/test';
import type { RenderResult } from '@/core/test';

import PageDataContainer, { PageDataContainerType } from './PageDataContainer';

const properties = {
  isLoading: false,
  isError: false,
  error: undefined,
};

function renderApp({ ...rest }: PageDataContainerType = properties): RenderResult {
  const utils = render(
    <PageDataContainer {...rest}>
      <h1>Testing text</h1>
    </PageDataContainer>,
  );
  return {
    ...utils,
  };
}

describe('PageDataContainer', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });
});
