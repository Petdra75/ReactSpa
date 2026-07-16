import React, { useEffect, useState } from 'react'

export const ClickCounter = () => {
    const [clickCount, setClickCount] = useState(0)

    useEffect(() => {
        const storedClicks : number | null = getStoredClicks();
        
        if (storedClicks){
            setClickCount(storedClicks)
        }

    }, [])

    const handleClick = () => {
        setClickCount(clickCount + 1);
        localStorage.setItem("clickCount", clickCount.toString());
    }
    
    return (
    <div>
        <h3>Clicked {clickCount} times</h3>
        <button
            onClick={() => handleClick()}
        >Click me!</button>
    </div>
  )
}