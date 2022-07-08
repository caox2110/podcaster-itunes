import { forwardRef, Ref, ReactNode, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

import { constants } from '../../../../helper';
import { MuiBox } from '../..';

/**
 * Page component props definition
 *
 * @interface PageProperties
 * @typedef {PageProperties}
 */
interface PageProperties {
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
}

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
function Page(
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

// export type { PageProperties };
export default forwardRef(Page);
