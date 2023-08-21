"use client"

import styles from './page.module.css'
import { useReadList } from "../ContextAPI"

export default function Favorites(){

    const {readList} = useReadList();

    return(
        <h1 className={styles.title}>{readList}</h1>
    )
}