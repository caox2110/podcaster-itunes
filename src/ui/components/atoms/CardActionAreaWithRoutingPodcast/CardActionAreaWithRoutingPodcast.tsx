import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { MuiCardActionArea } from '..';

interface CardActionAreaWithRoutingPodcastType {
  /**
   * Children react element
   *
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
  /**
   * Route go to
   *
   * @type {(string | number)}
   */
  route: string;
}

export default function CardActionAreaWithRoutingPodcast({
  children,
  route,
}: CardActionAreaWithRoutingPodcastType): JSX.Element {
  const navigate = useNavigate();
  const handleClickEvent = useCallback(() => {
    navigate(route);
  }, [navigate, route]);
  return <MuiCardActionArea onClick={handleClickEvent}>{children}</MuiCardActionArea>;
}
