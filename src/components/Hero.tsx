import React from 'react'
import styled from 'styled-components'

const paragrphFontSize = "1.4em";
const titleFontSize  = "2.4em";

const StyledHero = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
`
const StyledTitle = styled.h1`
    font-size: ${titleFontSize};
    color: white;
`
const StyledParagraph = styled.p`
    font-size: ${paragrphFontSize};
    text-align: left;
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
    <StyledHero>
        
        <StyledTitle>{title}</StyledTitle>
        <StyledParagraph>{firstParagraph}</StyledParagraph>    
        <StyledParagraph>{secondParagraph}</StyledParagraph>
        <StyledImage src={imagePath} alt="image of a galaxy" />

    </StyledHero>
  )
}
