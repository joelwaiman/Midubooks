"use client"

import styles from './page.module.css'
import { useReadList } from "../ContextAPI"

import { FiTrash } from "react-icons/fi";

export default function Favorites() {

  const { readList, setReadList } = useReadList();

  const HandleDelete = (ISBN) => {
    const bookToDelete = readList.filter(book => book !== ISBN);
    setReadList(bookToDelete)
  }

  return (
    <article className={styles.article}>
      {readList.length === 0 ?
        <h1>No haz agregado ningun libro :c</h1>
        :
        <ul className={styles.ul}>
          {readList.map((item) => {
            return <li className={styles.book} key={item.ISBN}>
              <img className={styles.img}
                alt={item.title}
                src={item.cover}>
              </img>
              <p className={styles.fav}>{item.title}</p>
              <button className={styles.button} onClick={() => HandleDelete(item)}>
                <FiTrash />
              </button>
            </li>
          })}
        </ul>}
    </article>
  )
}