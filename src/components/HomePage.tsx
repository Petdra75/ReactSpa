import React from 'react'
import styled from 'styled-components'
import { Hero } from './Hero'
import { ClickCounter } from './CLickCounter'

const APP_TITLE =  "Nasa. The G.O.A.T of space"
const FIRST_PARAGRAPH = "For more than 65 years, NASA has made the seemingly impossible, possible. At its 20 centers and facilities across the country and with U.S. commercial companies and international partners, NASA leads studying Earth science, including climate, our Sun, solar system, and the larger universe"
const SECOND_PARAGRAPH = "Escalations in the Cold War between the US and Soviet Union prompted President John F. Kennedy to charge NASA with landing a man on the Moon and returning him safely to Earth by the end of the 1960s and installed James E. Webb as NASA administrator to achieve this goal."
const HERO_IMAGE_PATH = "src\\assets\\nasa-img.jpg"

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
`

const HomePage = () => {
  return (
    <StyledHomePage>
        <Hero 
        title={APP_TITLE}
        firstParagraph={FIRST_PARAGRAPH}
        secondParagraph={SECOND_PARAGRAPH}
        imagePath={HERO_IMAGE_PATH}/>
        <ClickCounter/>
    </StyledHomePage>
  )
}

export default HomePage