import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ASTEROID_HEIGHT, ASTEROID_WIDTH } from '../theme'
import { AsteroidContext } from './HomePage'

const StyledImage = styled.img`
    width: ${ASTEROID_WIDTH};
    height: ${ASTEROID_HEIGHT};
`
const getRandomCoords = () : {x: number, y:number} => {
        const randomX = (window.innerWidth) * Math.random()
        const randomY = (window.innerHeight/2) * Math.random()
        return {x: randomX, y: randomY}
} 
    

export const RandomAsteroid = () => {
    const [asteroidPosition, setAsteroidPosition] = useState<{x: number, y:number}>(getRandomCoords())
    const {clickCount, setClickCount} = useContext(AsteroidContext);
    
    useEffect(() => {
        const storedClicksString: string | null = localStorage.getItem("clickCount")
        
        if (storedClicksString){
            const storedClicks = parseInt(storedClicksString);
            setClickCount(storedClicks);
        }

    }, [])

    const handleClick = () => {
        setClickCount(clickCount+1)
        localStorage.setItem("clickCount", clickCount.toString())
        setAsteroidPosition(getRandomCoords())
    }
    
        return (
    <div style={{
        width: ASTEROID_WIDTH,
        height: ASTEROID_HEIGHT, 
        background : "brown",
        position: "absolute",
        top: asteroidPosition.y,
        left: asteroidPosition.x
    }}

    onClick={() => handleClick()}>
        <StyledImage src="src/assets/asteroid.png" alt="" />
    </div>
  )
}
