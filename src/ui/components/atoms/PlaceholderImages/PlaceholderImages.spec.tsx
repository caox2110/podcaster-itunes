import { useRef, MutableRefObject } from 'react';

import { render, renderHook } from '@/core/test';
import type { RenderResult } from '@/core/test';

import PlaceholderImages from './PlaceholderImages';

function renderApp(): RenderResult {
  const { result } = renderHook(() => useRef() as MutableRefObject<HTMLDivElement>);

  const utils = render(<PlaceholderImages ref={result.current} />);

  return {
    ...utils,
  };
}

describe('PlaceholderImages', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement } = renderApp();

      expect(baseElement).toBeTruthy();
    });
  });
});
