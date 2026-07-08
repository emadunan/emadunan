import React, { useRef } from 'react';
import styles from './MusicCard.module.css';
import { useAudioManager } from '@/context/AudioManagerContext';

interface MusicItem {
  id: string;
  title: string;
  artist: string;
  album?: string;
  image: string;
  audio: string;
  released?: string;
  order?: number;
}

const MusicCard: React.FC<{ item: MusicItem }> = ({ item }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { handlePlay } = useAudioManager();

  const onPlay = () => {
    if (audioRef.current) {
      handlePlay(audioRef.current);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={`${item.title} cover`} className={styles.image} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.artist}>
          {item.artist}
          {item.album && <span className={styles.album}> – {item.album}</span>}
        </p>
        {item.released && (
          <p className={styles.meta}>{new Date(item.released).toLocaleDateString()}</p>
        )}
        <audio
          ref={audioRef}
          controls
          onPlay={onPlay}
          className={styles.audio}
        >
          <source src={item.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default MusicCard;
