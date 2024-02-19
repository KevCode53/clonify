import { useEffect, useRef, useState } from 'react'
import { usePlayerStore } from '@/store/PlayerStore'
import styles from './player.module.css'
import { NextArrow } from '@/icons/NextArrow'
import { Random } from '@/icons/Random'
import { Repeat } from '@/icons/Repeat'
import { CurrentSong } from '../CurrentSong/CurrentSong'

const Pause = () => (
  <svg viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)
const Play = () => (
  <svg viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)

export const Player = () => {
  const {currentMusic, isPlaying, setIsPlaying, setCurrentMusic} = usePlayerStore(state => state)
  const audioRef = useRef()

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause()
  },[isPlaying])

  useEffect(() => {
    const {song, playlist, songs} = currentMusic
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`
      audioRef.current.src = src
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

      <div className="player">
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
        <div className={styles.currentSongTime}></div>
      </div>

      <div className="volume">Volumen</div>

      <audio ref={audioRef} />
    </section>
  )
}