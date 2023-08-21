"use client"

import styles from './page.module.css'
import { useReadList } from "../ContextAPI"

export default function Favorites(){

    const {readList} = useReadList();

    return(
        <article className={styles.article}>
      <ul className={styles.ul}>
        {readList.map((book) => {
          return <li className={styles.book} key={book.ISBN}>
            <img className={styles.img}
              alt={book.title}
              src={book.cover}>
            </img>
            <p className={styles.fav}>{book.title}</p>
          </li>
        })}
      </ul>
    </article>
    )
}