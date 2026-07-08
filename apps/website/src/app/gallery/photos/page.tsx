"use client"

import { Masonry } from 'masonic';
import React, { useEffect, useState } from 'react';
import { photos } from '@/data/photo.data';
import PhotoCard from '@/components/gallary/PhotoCard';
import MainContainer from '@/components/layout/MainContainer';
import { ResizeObserver } from '@juggle/resize-observer';

const PhotosPage = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
      (window as any).ResizeObserver = ResizeObserver;
    }
    setReady(true);
  }, []);

  return ready ? (
    <MainContainer>
      <Masonry
        items={photos}
        columnWidth={320}
        columnGutter={24}
        overscanBy={2}
        itemKey={(item, index) => `${item.order}-${index}`}
        render={({ index, data }) => <PhotoCard item={data} />}
      />
    </MainContainer>
  ) : null;
}

export default PhotosPage;