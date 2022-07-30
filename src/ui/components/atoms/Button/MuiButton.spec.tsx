import { fireEvent, render } from '@/core/test';
import type { RenderResult } from '@/core/test';

import MuiButton, { ButtonProperties } from './MuiButton';

type RenderAppType = {
  button: HTMLButtonElement;
} & RenderResult;

const properties = {
  'data-testid': 'home-podcast-button',
  children: 'Podcaster',
};

function renderApp({ ...rest }: ButtonProperties = properties): RenderAppType {
  const utils = render(<MuiButton {...rest} />);
  const { getByDataTestId } = utils;

  const button = getByDataTestId(/home-podcast-button/) as HTMLButtonElement;

  return {
    ...utils,
    button,
  };
}

describe('MuiButton', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });

  describe('Appearance', function () {
    it('should render outlined style by default', () => {
      const { button } = renderApp();
      expect(button.className).toMatch(/outlined/i);
    });
  });

  describe('Default behaviors', function () {
    it('should call onClick event', async function () {
      const handleClick = jest.fn();
      const { button } = renderApp({ ...properties, onClick: handleClick });
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
