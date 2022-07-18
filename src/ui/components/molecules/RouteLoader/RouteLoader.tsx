import { memo, LazyExoticComponent } from 'react';

import { SuspenseCustom } from '..';

function RouteLoader({
  Component,
  ...rest
}: {
  Component: LazyExoticComponent<() => JSX.Element>;
}): JSX.Element {
  return (
    <SuspenseCustom>
      <Component {...rest} />
    </SuspenseCustom>
  );
}

export default memo(RouteLoader);
