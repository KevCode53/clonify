import styles from './styles.module.css'

export const CurrentSong = ({image, title, artists}) => {
  return (
    <div className={styles.currentSongContainer}>
      <picture>
        <img src={image} alt={title} />
      </picture>
      <div className={styles.infoSong}>
        <h3>{title}</h3>
        <span>{artists}</span>
      </div>
    </div>
  )
}
