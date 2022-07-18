import { useCallback, useRef } from 'react';
import LazyLoad from 'react-lazyload';

import { PlaceholderImages } from '../..';

interface PreloadImagesHandler {
  handleRemovePlaceholder: () => void;
}

interface PreloadImagesType {
  children: (properties: PreloadImagesHandler) => JSX.Element;
}

export default function PreloadImages({ children }: PreloadImagesType) {
  const referencePlaceholder = useRef() as React.MutableRefObject<HTMLDivElement>;

  // TODO: Split onLoad and OnError functions to manage onError for images
  const handleRemovePlaceholder = useCallback(() => {
    referencePlaceholder.current?.remove();
  }, []);

  return (
    <>
      <PlaceholderImages ref={referencePlaceholder} />
      <LazyLoad>{children({ handleRemovePlaceholder })}</LazyLoad>
    </>
  );
}
