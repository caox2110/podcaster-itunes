import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MuiAppBar, MuiToolbar, MuiTypography, MuiButton, MuiCircularProgress } from '../..';

type AppBarProperties = {
  appName: string;
  handleClickEventHomeButton: () => void;
};

export default function AppBar({ appName, handleClickEventHomeButton, ...rest }: AppBarProperties) {
  const location = useLocation();
  const [loadingRoute, setLoadingRoute] = useState(false);

  useEffect(() => {
    setLoadingRoute(true);
    setTimeout(() => {
      setLoadingRoute(false);
    }, 500);
  }, [location]);

  return (
    <MuiAppBar component='nav' elevation={0} {...rest}>
      <MuiToolbar sx={{ justifyContent: 'space-between' }}>
        <MuiButton data-testid='backToHome' variant='home' onClick={handleClickEventHomeButton}>
          <MuiTypography noWrap component='div' sx={{ flexGrow: 1 }} variant='h6'>
            {appName}
          </MuiTypography>
        </MuiButton>
        {loadingRoute && <MuiCircularProgress data-testid='loadingAppBar' />}
      </MuiToolbar>
    </MuiAppBar>
  );
}
