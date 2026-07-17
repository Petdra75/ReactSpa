import React from 'react'
import styled from 'styled-components'
import { HERO_SECTION_GAP, PARAGRAPH_FONT_SIZE, TITLE_FONT_SIZE } from '../theme'

const StyledHeroSectionContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: ${HERO_SECTION_GAP};
    text-align: center;
    align-self: center;
`
const StyledTitle = styled.h1`
    font-size: ${TITLE_FONT_SIZE};
    color: black;
    opacity: 80%;
`
const StyledParagraph = styled.p`
    font-size: ${PARAGRAPH_FONT_SIZE};
    text-align: left;
    width: 80%;
    text-indent: 40px;
`
const StyledImage = styled.img`
    align-self: center;
    width: 50%;
`
interface HeroProps {
    title: string
    firstParagraph: string
    secondParagraph: string
    imagePath: string 
}

export const Hero : React.FC<HeroProps> = ({title, firstParagraph, secondParagraph, imagePath} : HeroProps) => {
  return (
    <StyledHeroSectionContainer>
        
        <StyledTitle>{title}</StyledTitle>
        <StyledParagraph>{firstParagraph}</StyledParagraph>    
        <StyledParagraph>{secondParagraph}</StyledParagraph>
        <StyledImage src={imagePath} alt="image of a galaxy" />

    </StyledHeroSectionContainer>
  )
}
