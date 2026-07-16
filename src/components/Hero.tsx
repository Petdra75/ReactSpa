import React from 'react'
import styled from 'styled-components'
import { heroSectionGap, paragrphFontSize, titleFontSize } from '../theme'

const StyledHeroSectionContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: ${heroSectionGap};
    text-align: center;
    align-self: center;
`
const StyledTitle = styled.h1`
    font-size: ${titleFontSize};
    color: black;
    opacity: 80%;
`
const StyledParagraph = styled.p`
    font-size: ${paragrphFontSize};
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
