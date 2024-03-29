import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"


const ImageCarousel = ({ current, handleNext, handlePrevious, isDouble, isCover, isLast }) => {
    return (
        <Container className="imageCarousel" isDouble={isDouble}>
            <Next onClick={handleNext} />
            <Previous onClick={handlePrevious}/>
            <ImageContainer isDouble={isDouble} isCover={isCover} isLast={isLast}>
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
    max-height: 340px;
    max-height: ${props => props.isCover ? "520px" : props.isDouble ? "340px" : "520px"};
    overflow: hidden;
    
    @media screen and (min-width: 2000px) {
      max-height: 640px;
    }


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
      @media screen and (min-width: 1080px) {
        width: ${ props => props.isDouble && props.isCover ? "648px" : props.isDouble ? "860px" : "648px"};
        max-height: inherit;
      }  
      @media screen and (min-width: 1400px) {
        /* width: ${ props => props.isDouble ? "900px" : "720px"}; */
        width: ${ props => props.isDouble && props.isCover ? "648px" : props.isDouble ? "1080px" : "648px"};
      }  
      /* @media screen and (min-width: 1440px) {
      }   */
      @media screen and (min-width: 2000px) {
        /* width: 940px; */
        width: ${ props => props.isDouble && props.isCover ? "740px" : props.isLast ? "2200px" : props.isDouble ? "1600px" : "740px"};
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