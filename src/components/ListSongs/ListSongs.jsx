import React from 'react'
import styles from './styles.module.css'
import { Duration } from '@/icons/Icons'

export const ListSongs = ({songs}) => {

  return (
    <div className={styles.table_container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.titles}>
            <th>#</th>
            <th>Título</th>
            <th>Artista</th>
            <th><Duration/></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={song.id}>
              <td>{index+1}</td>
              <td>{song.title}</td>
              <td>{song.artists}</td>
              <td>{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
