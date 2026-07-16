import React, { createContext, SetStateAction, useContext, useState } from 'react'
import { ComplexCounterButton } from './ComplexCounterButton'
import { ComplexCounterDisplay } from './ComplexCounterDisplay'

export const ComplexCounterContext = createContext({
    clickCount : 0,
    setClickCount : React.Dispatch<React.SetStateAction<number>>
})

export const ComplexCounter = () => {
    const [clickCount, setClickCount] = useState(0);

    return (
    <div>
        <ComplexCounterContext value={{clickCount, setClickCount}}>
            <ComplexCounterButton/>
            <ComplexCounterDisplay/>
        </ComplexCounterContext>
    </div>
  )
}