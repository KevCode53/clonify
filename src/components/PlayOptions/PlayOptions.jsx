import styles from './styles.module.css'
import {Pause, Play, HeartFill, MenuPoints, MenuBars, Heart} from '@/icons/Icons'

import React, { useState } from 'react'

export const PlayOptions = () => {

  const [isPlaying, setIsPlaying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)


  return (
    <div className={styles.play_options}>
      <button onClick={() => setIsPlaying(!isPlaying)} className={styles.play_button}>
        {isPlaying ? <Pause/> : <Play />}
      </button>
      <button
        onClick={() => setIsLiked(!isLiked)}
        className={`${styles.like_button} ${isLiked && styles.green}`}
      >
        {isLiked ? <Heart/> : <HeartFill />}
      </button>
      <div className={styles.options}>
        <button>
          <MenuPoints />
        </button>
      </div>
      <div className={styles.view_playlist}>
        <button><MenuBars/></button>
        <ul className={styles.list_container}>
          <li>Ver como</li>
          <li>Compacta</li>
          <li>Lista</li>
        </ul>
      </div>
    </div>
  )
}
