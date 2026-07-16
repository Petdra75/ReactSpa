import React, { useContext, useState } from 'react'
import { ComplexCounterContext } from './ComplexCounter'

export const ComplexCounterButton = () => {
    const {clickCount, setClickCount} = useContext(ComplexCounterContext)
    return (
        <>
            <button
            onClick={() => setClickCount(clickCount+1)}>Complex Click me!</button>
        </>
    )
}