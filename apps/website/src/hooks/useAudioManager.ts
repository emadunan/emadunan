import { useRef } from 'react';

export function useAudioManager() {
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  function handlePlay(newAudio: HTMLAudioElement) {
    if (currentAudioRef.current && currentAudioRef.current !== newAudio) {
      currentAudioRef.current.pause();
    }
    currentAudioRef.current = newAudio;
  }

  return { handlePlay };
}
