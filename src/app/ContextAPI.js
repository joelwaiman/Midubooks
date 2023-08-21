"use client";

import React, { createContext, useContext, useState } from 'react';

const ReadListContext = createContext();

export function ReadListProvider({ children }) {
  const [readList, setReadList] = useState([]);
  const [genre, setGenre] = useState('');

  console.log(readList.ISBN);

  return (
    <ReadListContext.Provider value={{ readList, setReadList, genre, setGenre }}>
      {children}
    </ReadListContext.Provider>
  );
}

export function useReadList() {
  return useContext(ReadListContext);
}