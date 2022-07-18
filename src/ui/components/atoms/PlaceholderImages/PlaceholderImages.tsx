import { keyframes } from '@emotion/react';

import { styled } from '../../../themes';

interface PlaceholderImagesType<T> {
  readonly ref: T | null;
}

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

export default styled('div')<PlaceholderImagesType<React.MutableRefObject<HTMLDivElement>>>(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  animation: `${loadingAnimation} 2s linear infinite`,
}));
