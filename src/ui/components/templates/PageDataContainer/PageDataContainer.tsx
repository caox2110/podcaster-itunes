import { ReactNode } from 'react';

import { ErrorContainer, Loading, SuspenseCustom } from '../..';

type PageDataContainerType = {
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
  children?: ReactNode;
};

const defaultProperties = { children: Element };

function PageDataContainer({ isLoading, isError, error, children }: PageDataContainerType) {
  if (isError) return <ErrorContainer error={error || ''} />;

  return <SuspenseCustom>{isLoading ? <Loading /> : children}</SuspenseCustom>;
}

PageDataContainer.defaultProps = defaultProperties;

export type { PageDataContainerType };
export default PageDataContainer;
