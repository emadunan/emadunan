import ResizeObserver from '@juggle/resize-observer';
if (typeof window !== 'undefined' && !(window as any).ResizeObserver) {
  (window as any).ResizeObserver = ResizeObserver;
}
