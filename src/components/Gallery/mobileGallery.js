import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const MobileGallery = ({ items }) => {
    return (
        <Container >
            {
                items.map( (item, i) => (
                    <GalleryItem key={i} >
                        <Img 
                            key={item.fluid.src}
                            fluid={item.fluid}
                            objectFit="contain"
                        />
                        
                    </GalleryItem>
                    ))
            }
            <Divider />
        </Container>
    )
}

export default MobileGallery

const Container = styled.div`
    @media screen and (min-width: 600px) {
        display: none;
    }

    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    grid-gap: 10vh;
    justify-content: normal;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 50vh;

`

const GalleryItem = styled.div`

    
`

const Divider = styled.div`
    height: 20vh;
    opacity: 0;
    width: 100%;
`