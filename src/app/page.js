"use client"

import { useReadList } from './ContextAPI'
import data from '../books.json'
import styles from './page.module.css'
import { useState } from 'react'

const books = data.library.map((data) => data.book)
const genres = Array.from(new Set(books.map((book) => book.genre)));

export default function Home() {
  const { readList, setReadList, genre, setGenre } = useReadList();

  const [inputValue, setInputValue] = useState('')

  const matches = genre ? books.filter((book) => {
    if (genre && book.genre != genre) {
      return false
    } else {
      return true
    }
  }) : books;

  function handleBookClick(book) {
    setReadList((readList) => readList.includes(book)
      ? readList.filter((readBook) => readBook !== book)
      : [...readList, book])
  }


  const catchInput = (e) => {
    const { value } = e.target;
    setInputValue(value)
    console.log(inputValue);
}
  

  return (
    <article className={styles.article}>
      {/* <span>
        <input value={inputValue} onChange={catchInput} placeholder='Que buscas?' className={styles.input} />
      </span> */}
      <select className={styles.select} value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value=''>Todos los generos</option>
        {genres.map((genre) => {
          return <option key={genre} value={genre}>{genre}</option>
        })}
      </select>
      <ul className={styles.ul}>
        {matches.map((book) => {
          return <li className={styles.book} onClick={() => handleBookClick(book)} key={book.ISBN}>
            <img className={styles.img}
              alt={book.title}
              src={book.cover}>
            </img>
            <p className={readList.includes(book) && styles.fav}>{book.title}</p>
          </li>
        })}
      </ul>
    </article>
  )
}
