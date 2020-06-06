import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"


const ImageCarousel = ({ current, handleNext, handlePrevious }) => {
    return (
        <Container className="imageCarousel">
            <Next onClick={handleNext} />
            <Previous onClick={handlePrevious}/>
            <ImageContainer>
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

// const Container = styled.div`
//     height: 100%;
//     width: 100%;
//     /* display: flex; */
//     justify-content: center;
//     align-items: center;
//     position: relative;

//     max-width: 60vh;
//     background: red;
//     border: 1px solid purple;
//     margin-left: auto;
//     margin-right: auto;

//     /* img {
//         max-height: 65vh;
//         width: auto;
//         margin-left: auto;
//         margin-right: auto;
//         display: block;
//     } */
// `

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
        width: 980px;
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