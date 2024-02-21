import { Slider } from "@/components/Slider/Slider"
import { useEffect, useState } from "react"

import styles from './styles.module.css'


export const SongControl = ({audio}) => {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    audio.current.addEventListener('timeupdate', handleTimeUpdate)
    return () => {
      audio.current.addEventListener('timeupdate', handleTimeUpdate)
    }
  },[])

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime)
  }

  const formatTime = time => {
    if (time === null) {return `0:00`}

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const duration = audio?.current?.duration ?? 0

  console.log(duration)

  return (
    <div className={styles.current_song_time_container}>
      <span className="w-14">{formatTime(currentTime)}</span>
      <Slider
        defaultValue={[100]}
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className="w-full"
        onValueChange={(value) => {
          audio.current.currentTime = value
        }}
      />
      <span className="w-14">
        {duration ? formatTime(duration) : `0:00`}
      </span>
    </div>
  )
}
