import { ReactElement, ReactNode } from 'react';

import { MuiBox, MuiContainer, MuiTypography } from '../..';
import { styled } from '../../../themes';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '60vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function ErrorContainer({
  error = 'App Error',
}: {
  error: string | ReactElement | ReactNode;
}) {
  return (
    <MuiContainer>
      <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
        <MuiTypography paragraph variant='h3'>
          Sorry, there was an error:
        </MuiTypography>
        <pre style={{ whiteSpace: 'normal' }}>
          <MuiTypography sx={{ color: 'text.secondary' }}>{error}</MuiTypography>
        </pre>
        <MuiBox
          alt='app error image'
          component='img'
          src='/static/illustrations/undraw_server_down_s-4-lk.svg'
          sx={{ height: { xs: 200, sm: 260 }, mx: 'auto', my: { xs: 5, sm: 10 } }}
        />
      </ContentStyle>
    </MuiContainer>
  );
}
