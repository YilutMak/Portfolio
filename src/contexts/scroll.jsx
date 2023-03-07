import React, { useState, createContext, useContext } from 'react'
import produce from 'immer'

const scrollContext = createContext()

const initialScroll = {
  scrollSection: 'homeSection'
}

export function ScrollProvider({ children }) {
  const [scrollState, setScrollState] = useState(initialScroll)

  const setScroll = async (data) => {
    setScrollState(produce(scrollState, (draft) => {
      draft.scrollSection = 'homeSection'
    }))
  }

  const contextData = {
    scroll: scrollState,
    setScroll
  }

  return <scrollContext.Provider value={contextData}>{children}</scrollContext.Provider>
}

export function useScroll() {
  return useContext(scrollContext)
}
