import { MuiContainer, MuiLinearProgress } from '../..';

export default function Loading(): JSX.Element {
  return (
    <MuiContainer maxWidth='xl' sx={{ py: 2 }}>
      <MuiLinearProgress />
    </MuiContainer>
  );
}
