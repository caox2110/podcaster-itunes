import { ReactNode, Suspense } from 'react';

import { Loading } from '..';

/**
 * Component props definition
 *
 * @typedef {SuspenseCustomProperties}
 */
type SuspenseCustomProperties = {
  children: ReactNode;
  fallback?: JSX.Element | undefined;
};

/**
 * React suspense component with custom fallback
 *
 * @param {SuspenseCustomProperties} { children, fallback }
 * @returns
 */
function SuspenseCustom({ children, fallback }: SuspenseCustomProperties) {
  return <Suspense fallback={fallback || <Loading />}>{children}</Suspense>;
}

/**
 * Default props values
 *
 * @type {{ fallback: any; }}
 */
const defaultProps = {
  fallback: null,
};

/**
 * Set the default props to the component
 */
SuspenseCustom.defaultProps = defaultProps;

export default SuspenseCustom;
