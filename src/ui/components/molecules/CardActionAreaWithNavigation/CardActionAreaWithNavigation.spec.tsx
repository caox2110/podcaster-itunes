import { fireEvent, render, screen } from '@/core/test';
import type { RenderResult } from '@/core/test';

import CardActionAreaWithRoutingPodcast, {
  CardActionAreaWithNavigationType,
} from './CardActionAreaWithNavigation';

type RenderAppType = {
  link: HTMLLinkElement;
} & RenderResult;

const properties = {
  children: <h1>Card Action</h1>,
  route: '/podcast/1633466636',
};

function renderApp({ ...rest }: CardActionAreaWithNavigationType = properties): RenderAppType {
  const utils = render(<CardActionAreaWithRoutingPodcast {...rest} />, { withRouter: true });

  const link = screen.getByRole(/link/) as HTMLLinkElement;

  return {
    ...utils,
    link,
  };
}

describe('CardActionAreaWithRoutingPodcast', () => {
  describe('Rendering', () => {
    it('Should render without throwing any errors', () => {
      const { baseElement, container } = renderApp();

      expect(baseElement).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });

  describe('Default behaviors', function () {
    it('should go to new route after call onClick event in the child', function () {
      const handleClick = jest.fn();
      const { link } = renderApp({
        ...properties,
        onClick: handleClick,
      });

      expect(screen.getByText(/card action/i)).toBeInTheDocument();

      fireEvent.click(link);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
