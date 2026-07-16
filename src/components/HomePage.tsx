import React, { createContext, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { Hero } from './Hero'
import { ClickCounter } from './CLickCounter'
import { APP_TITLE, FIRST_PARAGRAPH, HERO_IMAGE_PATH, SECOND_PARAGRAPH } from '../content'
import { RandomAsteroid } from './RandomAsteroid'

export const AsteroidContext = createContext({
  clickCount : 0,
  setClickCount: React.Dispatch<SetStateAction<number>>
})

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;    
`
const StyledAsteroidCounter = styled.div`
  position: absoulute;
  top: 40px;
  left: 60px;
  color: brown;
`
const HomePage = () => {
   const [clickCount, setClickCount] = useState(0)
   
  return (
    <StyledHomePage>
      <AsteroidContext value={{clickCount, setClickCount}}>
        <StyledAsteroidCounter>You caught {clickCount} asteroids!!</StyledAsteroidCounter>
        <Hero 
        title={APP_TITLE}
        firstParagraph={FIRST_PARAGRAPH}
        secondParagraph={SECOND_PARAGRAPH}
        imagePath={HERO_IMAGE_PATH}
        />
        
        <RandomAsteroid/>
      </AsteroidContext>

    </StyledHomePage>
  )
}

export default HomePage
