// app/context/AudioManagerContext.tsx
import React, { createContext, useContext, useRef } from 'react';

type AudioManagerContextType = {
  handlePlay: (audio: HTMLAudioElement) => void;
};

const AudioManagerContext = createContext<AudioManagerContextType | null>(null);

export const AudioManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (newAudio: HTMLAudioElement) => {
    if (currentAudioRef.current && currentAudioRef.current !== newAudio) {
      currentAudioRef.current.pause();
    }
    currentAudioRef.current = newAudio;
  };

  return (
    <AudioManagerContext.Provider value={{ handlePlay }}>
      {children}
    </AudioManagerContext.Provider>
  );
};

export const useAudioManager = () => {
  const context = useContext(AudioManagerContext);
  if (!context) {
    throw new Error('useAudioManager must be used within an AudioManagerProvider');
  }
  return context;
};
