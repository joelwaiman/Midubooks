"use client"

import { useState } from 'react'
import data from '../books.json'
import styles from './page.module.css'

const books = data.library.map((data) => data.book)

export default function Home() {
  const [genre, setGenre] = useState('')

  const matches = genre ? books.filter((book)=>{
    if(genre && book.genre != genre){
      return false
    }else{
      return true
    }
  }) : books;

  return (
    <article  className={styles.article}>
      <select value={genre} onChange={(e)=> setGenre(e.target.value)}>
        <option value=''>Todos los generos</option>
        <option value='Fantasía'>Fantasia</option>
        <option value='Ciencia ficción'>Ciencia ficción</option>
        <option value='Zombies'>Zombies</option>
        <option value='Terror'>Terror</option>
      </select>
      <ul className={styles.ul}>
        {matches.map((book) => {
          return <li className={styles.book} key={book.ISBN}>
            <img className={styles.img}
              alt={book.title}
              src={book.cover}>
            </img>
            <p>{book.title}</p>
          </li>
        })}
      </ul>
    </article>
  )
}
