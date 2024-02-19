import { CardPlayBtn } from "../CardPlayBtn/CardPlayBtn";
import { AudioSpectum } from "../AudioSpectum/AudioSpectum";

import styles from './styles.module.css'
import { usePlayerStore } from "@/store/PlayerStore";

export const PlayListItemCard = ({playlist}) => {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)
  const {id, cover, title, artists, color } = playlist
  const artistString = artists.join(", ")

  return (
    <article className={`${styles.playListItemCard} truncate`}>

      <a
        className={`${styles.itemCard} truncate`}
        href={`/playlist/${id}`}
        transition:name={`playlist ${id} box`}
      >
        <picture className={styles.itemPicture}>
          <img
            src={cover}
            alt={`Cover of ${title} by ${artistString}`}
            transition:name={`playlist ${id} image`}
          />
        </picture>
        <div className={`info w-auto`}>
          <h4
            className={`${styles.title} truncate`}
            transition:name={`playlist ${title} title`}
          >
            {title}
          </h4>
        </div>

        {
          isPlaying && currentMusic?.playlist?.id === id && (
            <AudioSpectum />
          )
        }
      </a>
      <CardPlayBtn id={id} client:visible />

    </article>
  )
}
