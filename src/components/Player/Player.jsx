import { useEffect, useRef, useState } from 'react'
import { Play, Pause } from '@/icons/Icons'
import { usePlayerStore } from '@/store/PlayerStore'
import styles from './player.module.css'
import { NextArrow } from '@/icons/NextArrow'
import { Random } from '@/icons/Random'
import { Repeat } from '@/icons/Repeat'
import { CurrentSong } from '../CurrentSong/CurrentSong'
import { VolumeControls } from '../VolumeControls/VolumeControls'
import { SongControl } from '../SongControl/SongControl'



export const Player = () => {
  const {currentMusic, isPlaying, setIsPlaying, volume} = usePlayerStore(state => state)
  const audioRef = useRef()

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause()
  },[isPlaying])

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    const {song, playlist, songs} = currentMusic
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`
      audioRef.current.src = src
      audioRef.current.volume = volume
      audioRef.current.play()
    }
  },[currentMusic])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className={styles.player}>

      <div className="current-song">
        <CurrentSong client:load image={currentMusic?.song?.image} title={currentMusic?.song?.title} artists={currentMusic?.song?.artists} />
      </div>

      <div className="player h-full">
        <div className={styles.player_controls}>
          <button className={styles.randomIcon}>
            <Random/>
          </button>
          <button className={styles.backSong}>
            <NextArrow />
          </button>

          <button
            className={styles.play_btn}
            onClick={handleClick}
          >
              { isPlaying ? <Pause /> : <Play/>}
          </button>

          <button className={styles.nextSong}>
            <NextArrow />
          </button>
          <button className={styles.repeatIcon}>
            <Repeat />
          </button>
        </div>
        <div className={styles.currentSongTime}>
          <SongControl audio={audioRef}/>
        </div>
      </div>

      <div className="volume">
        <VolumeControls client:load />
      </div>

      <audio ref={audioRef} />
    </section>
  )
}
