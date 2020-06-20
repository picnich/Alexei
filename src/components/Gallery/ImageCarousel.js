import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"


const ImageCarousel = ({ current, handleNext, handlePrevious, isDouble }) => {
    return (
        <Container className="imageCarousel" isDouble={isDouble}>
            <Next onClick={handleNext} />
            <Previous onClick={handlePrevious}/>
            <ImageContainer isDouble={isDouble}>
                <Img 
                    key={current.fluid.src}
                    fluid={current.fluid} 
                    imgStyle={{
                        objectFit: "contain",
                        objectPosition: "50% 50%",
                        maxHeight: "640px"
                    }}

                />
            </ImageContainer>
        </Container>
    )
}

export default ImageCarousel;

const Container = styled.div`
    position: relative;
    display: none;
    
    @media screen and (min-width: 600px ) {
        display: block;
    }
`
const ImageContainer = styled.div`
    /* position: relative;
    top: 50%;
    transform: translateY(-50%); */
    max-height: 640px;
    overflow: hidden;

    .gatsby-image-wrapper {
      width: 300px;   

      @media screen and (min-width: 640px) {
        width: 470px;
      }  
      @media screen and (min-width: 640px) {
        width: 470px;
      }  
      @media screen and (min-width: 980px) {
        width: 660px;
      }  
      @media screen and (min-width: 1280px) {
        width: ${ props => props.isDouble ? "900px" : "740px"};
      }  
      @media screen and (min-width: 1440px) {
        width: ${ props => props.isDouble ? "1200px" : "740px"};
      }  
      @media screen and (min-width: 2000px) {
        width: 940px;
      }  
  }
`

const Next = styled.div`
    height: 100%;
    position: absolute;
    right: 0;
    top:0;
    background: red;
    width: 50%;
    opacity: 0;
    cursor: e-resize;
    z-index: 2;
    `
const Previous = styled.div`
    height: 100%;
    position: absolute;
    background: blue;
    width: 50%;
    opacity: 0;
    top:0;
    left: 0;
    z-index: 2;
    cursor: w-resize;
`