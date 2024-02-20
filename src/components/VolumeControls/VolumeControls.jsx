import styles from './styles.module.css'

import { usePlayerStore } from "@/store/PlayerStore"
import {Slider} from '@/components/Slider/Slider'
import { MuteIcon, VolumeLow, VolumeMid, VolumeHigh } from "@/icons/Icons"
import { useEffect, useRef, useState } from "react"

export const VolumeControls = () => {
  const volume = usePlayerStore(state => state.volume)
  const setVolume = usePlayerStore(state => state.setVolume)
  const previousVolumeRef = useRef(volume)
  const isMute = volume < 0.1

  const handleMute = () => {
    if (isMute) {
      setVolume(previousVolumeRef.current)
    } else {
      previousVolumeRef.current = volume
      setVolume(0)
    }
  }


  return (
    <div className={styles.controls_container}>
      <button onClick={handleMute} className={styles.mute_button}>
        {
          isMute
            ? <MuteIcon/>
            : volume > .6
              ? <VolumeHigh/>
              : volume < .1 ? <VolumeLow/> : <VolumeMid/>
        }
      </button>
      <Slider
          defaultValue={[100]}
          step={1}
          max={100}
          min={0}
          value={[volume * 100]}
          className='w-[95px]'
          onValueChange={(value) => {
            const [newVolume] = value
            const volumeValue = newVolume / 100
            setVolume(volumeValue)
          }}
        />
    </div>
  )
}
