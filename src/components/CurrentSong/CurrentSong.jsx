import styles from './styles.module.css'
import { HeartFill } from '@/icons/Icons'
import { usePlayerStore } from '@/store/PlayerStore'

export const CurrentSong = ({image, title, artists}) => {
  const {currentMusic} = usePlayerStore(state => state)

  return (
    <div className={styles.currentSongContainer}>
      <picture>
        <img src={image} alt={title} />
      </picture>
      <div className={styles.infoSong}>
        <h3>
          <a href="">
            {title}
          </a>
        </h3>
        <span>
          <a href="">
            {artists}
          </a>
        </span>
      </div>
      {
        currentMusic.song !== null && (
        <button className={styles.likeBtn}>
          <HeartFill/>
        </button>
        )
      }
    </div>
  )
}
