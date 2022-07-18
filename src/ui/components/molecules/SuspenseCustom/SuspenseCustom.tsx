import { ReactNode, Suspense } from 'react';

import { MuiLinearProgress } from '../..';

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
 * Default props values
 *
 * @type {{ fallback: any; }}
 */
const defaultProps = {
  fallback: <MuiLinearProgress />,
};

/**
 * React suspense component with custom fallback
 *
 * @param {SuspenseCustomProperties} { children, fallback }
 * @returns
 */
function SuspenseCustom({ children, fallback }: SuspenseCustomProperties) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

/**
 * Set the default props to the component
 */
SuspenseCustom.defaultProps = defaultProps;

export default SuspenseCustom;
