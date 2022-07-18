import { useCallback } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

import { constants } from '@/core/constants';
import { MuiContainer, MuiToolbar, AppBar } from '@/ui';

const {
  app: { APP_NAME },
} = constants;

export default function Layout() {
  const navigate = useNavigate();

  const onClickHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar appName={APP_NAME} handleClickEventHomeButton={onClickHome} />
      <MuiContainer component='main' maxWidth='xl' sx={{ p: 3 }}>
        <MuiToolbar />
        <Outlet />
      </MuiContainer>
    </Box>
  );
}
