import { forwardRef, Ref, ReactNode, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

import { constants } from '@/core/constants';

import { MuiBox } from '../..';

/**
 * Component props definition
 *
 * @type PageProperties
 * @typedef {PageProperties}
 */
type PageProperties = {
  /**
   * Component to render
   *
   * @type {ReactNode}
   */
  children: ReactNode;
  /**
   * Title for page
   *
   * @type {string}
   */
  title: string;
  /**
   * Any others meta tag to add
   *
   * @type {?ReactNode}
   */
  meta?: ReactNode;
};

/**
 * Default props values
 *
 * @type {{ meta: any; }}
 */
const defaultProps = {
  meta: null,
};

const {
  app: { APP_NAME },
} = constants;

/**
 * Page template that helmet to update the title of the page after navigation.
 *
 * @param {PageProperties} { children, title = '', meta, ...rest }
 * @param {Ref<unknown>} reference
 * @returns {*}
 */
function PageWithForwardReference(
  { children, title = '', meta = null, ...rest }: PageProperties,
  reference: Ref<unknown>,
) {
  const fullTitle = useMemo<string>(() => `${title} | ${APP_NAME}`, [title]);

  return (
    <>
      <Helmet defaultTitle={APP_NAME}>
        <title>{fullTitle}</title>
        {meta}
      </Helmet>
      <MuiBox ref={reference} {...rest}>
        {children}
      </MuiBox>
    </>
  );
}

/**
 * Component Page with forwardRef
 *
 * @type {*}
 */
const Page = forwardRef(PageWithForwardReference);

/**
 * Set the default props to the component
 */
Page.defaultProps = defaultProps;

export default Page;
