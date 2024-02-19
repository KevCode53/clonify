import { Play, Pause } from "@/icons/Icons"
import { usePlayerStore } from "@/store/PlayerStore" // <-- Leer estado global

import styles from './styles.module.css'

export const CardPlayBtn = ({id}) => {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)

  const isPlayingPlayList = isPlaying && currentMusic?.playlist.id === id

  const handleClick = async () => {
    console.log(id)
    if (isPlayingPlayList) {
      setIsPlaying(false)
      return
    }

    // Promesas
    // fetch(`/api/get-info-playlist.json?id=${id}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     const {songs, playlist} = data
    //     setIsPlaying(true)
    //     setCurrentMusic({songs, playlist, song: songs[0]})
    //   })

    // Async / Await
    const res = await fetch(`/api/get-info-playlist.json?id=${id}`)
    const data = await res.json()
    const {songs, playlist} = await data
    setIsPlaying(true)
    setCurrentMusic({songs, playlist, song: songs[0]})
    console.log(playlist)
  }


  return (
    <button
      onClick={handleClick}
      className={styles.playBtnContainer}
    >
      {isPlayingPlayList ? <Pause /> : <Play/>}
    </button>
  )
}
