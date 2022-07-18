// import { ErrorBoundary } from 'react-error-boundary';

const defaultProperties = { children: Element };
PageDataContainer.defaultProps = defaultProperties;
export default function PageDataContainer({
  isLoading,
  isError,
  children,
}: {
  isLoading: boolean;
  isError: boolean;
  children?: any;
}) {
  if (isLoading) return <span>Loading.....</span>;
  if (isError) return <span>Loading.....</span>;
  return children;
}
