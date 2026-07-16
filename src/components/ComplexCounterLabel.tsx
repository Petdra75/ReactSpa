import React, { useContext, useEffect } from 'react'
import { ComplexCounterContext } from './ComplexCounter'

export const ComplexCounterLabel = () => {
  const {clickCount, setClickCount} = useContext(ComplexCounterContext)
  
  useEffect(() => {
          const storedClicks : number | null = getStoredClicks();
          
          if (storedClicks){
              setClickCount(storedClicks)
          }
  
    }, [])
  
  return (
    <>
      <p>Complex Counter was clicked {clickCount} times </p>
    </>
  )
}