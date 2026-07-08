'use client';

import { useEffect, useState } from 'react';
import MediaGallery from './MediaGallery';
import { ResizeObserver } from '@juggle/resize-observer';
import { AudioManagerProvider } from '@/context/AudioManagerContext';

const MediaGalleryWrapper = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
      (window as any).ResizeObserver = ResizeObserver;
    }
    setReady(true);
  }, []);

  return ready ? (
    <AudioManagerProvider>
      <MediaGallery />
    </AudioManagerProvider>
  ) : null;
};

export default MediaGalleryWrapper;
