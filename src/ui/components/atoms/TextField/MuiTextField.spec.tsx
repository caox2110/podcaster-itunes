import { render, screen, userEvent } from '@/core/test';
import type { RenderResult } from '@/core/test';

import MuiTextField, { TextFieldProperties } from './MuiTextField';

type RenderAppType = {
  input: HTMLInputElement;
  label: HTMLLabelElement;
} & RenderResult;

const properties = {
  'data-testid': 'filter-podcast',
  id: 'filter-podcast',
  label: 'Search',
  name: 'filter-podcast',
  placeholder: 'Filter podcasts',
  type: 'text',
};

function renderApp({ ...rest }: TextFieldProperties = properties): RenderAppType {
  const utils = render(<MuiTextField {...rest} />);

  const { getByDataTestId } = utils;

  const input = getByDataTestId(/filter-podcast/) as HTMLInputElement;
  const label = screen
    .getAllByText(/Search/)
    .find((item) => item.id === 'filter-podcast-label') as HTMLLabelElement;

  return {
    ...utils,
    input,
    label,
  };
}

describe('MuiTextField', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });

  describe('Appearance', function () {
    it('should render outlined style by default', () => {
      const { input } = renderApp();
      expect(input.className).toMatch(/outlined/i);
    });
    it('should render autocomplete off by default', () => {
      const { input } = renderApp();
      expect(input.autocomplete).toMatch(/off/i);
    });
    it('should render type search', () => {
      const { input } = renderApp({ ...properties, type: 'search' });
      expect(input.type).toMatch(/search/i);
    });
    it('should render label Search', () => {
      const { label } = renderApp();
      expect(label).toHaveTextContent(/search/i);
    });
    it('should render placeholder Search', () => {
      const { input } = renderApp();
      expect(input.placeholder).toMatch(/filter podcasts/i);
    });
  });

  describe('Default behaviors', function () {
    it('should have default value', () => {
      const { input } = renderApp({ ...properties, defaultValue: 'default value' });
      expect(input.value).toBe('default value');
    });
    it('should change value and call onChange event', async function () {
      const handleChange = jest.fn();
      const { input } = renderApp({ ...properties, onChange: handleChange });
      const user = userEvent.setup();

      await user.type(input, 'test');
      expect(input).toHaveValue('test');
      expect(handleChange).toHaveBeenCalledTimes(4);
    });

    // TODO: Remove this.
    // Validations
    // Formatting
  });
});
