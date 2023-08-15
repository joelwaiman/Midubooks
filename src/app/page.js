"use client"

import { useState } from 'react'
import data from '../books.json'
import styles from './page.module.css'

const books = data.library.map((data) => data.book)
const genres = Array.from(new Set(books.map((book) => book.genre)));

export default function Home() {
  const [genre, setGenre] = useState('')
  const [readList, setReadList] = useState([])

  const matches = genre ? books.filter((book)=>{
    if(genre && book.genre != genre){
      return false
    }else{
      return true
    }
  }) : books;

  function handleBookClick(book){
    setReadList((readList)=> readList.includes(book)
    ? readList.filter((readBook) => readBook !== book)
    : [...readList, book]) 
  }

  return (
    <article  className={styles.article}>
      <select className={styles.select} value={genre} onChange={(e)=> setGenre(e.target.value)}>
        <option value=''>Todos los generos</option>
        {genres.map((genre)=>{
          return <option key={genre} value={genre}>{genre}</option>
        })}
      </select>
      <ul className={styles.ul}>
        {matches.map((book) => {
          return <li className={styles.book} onClick={()=> handleBookClick(book.ISBN)} key={book.ISBN}>
            <img className={styles.img}
              alt={book.title}
              src={book.cover}>
            </img>
            <p className={readList.includes(book.ISBN) && styles.fav}>{book.title}</p>
          </li>
        })}
      </ul>
    </article>
  )
}
