"use client"

import MusicCard from '@/components/gallary/MusicCard';
import MainContainer from '@/components/layout/MainContainer';
import { AudioManagerProvider } from '@/context/AudioManagerContext';
import { music } from '@/data/music.data';
import React from 'react';
import styles from "./music-page.module.css"

const MusicPage = () => {
  return (
    <AudioManagerProvider>
      <MainContainer>
        <div className={styles.container}>
          {music.map(item => <MusicCard key={item.id} item={item} />)}
        </div>
      </MainContainer>
    </AudioManagerProvider>
  )
}

export default MusicPage;