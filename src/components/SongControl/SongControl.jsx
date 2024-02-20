import { Slider } from "@radix-ui/react-slider"
import { useEffect, useState } from "react"


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

  const duration = audio?.current?.duration ?? 0

  console.log(currentTime)

  return (
    <div className="">
      {/* <span>{currentTime}</span> */}
      <Slider
        defaultValue={[100]}
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className="w-[300px]"
        onValueChange={(value) => {
          audio.current.currentTime = value
        }}
      />
      {/* <span>{duration}</span> */}
    </div>
  )
}
