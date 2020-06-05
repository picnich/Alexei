import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Gallery = ({ items, current, handleClick, isThumbnail, isSinglePage }) => {
    console.log(items);
    return (
        <GalleryContainer isThumbnail={isThumbnail} isSinglePage={isSinglePage} >
            {
                items.map( (item, i) => (
                    <GalleryItem 
                        key={i} 
                        isCurrent={current === i}
                        onClick={ () => handleClick(i)}
                    >
                        {/* <img src={item} /> */}
                        {/* <p>{item.fluid.src}</p> */}
                        <Img 
                            key={item.fluid.src}
                            fluid={item.fluid}
                            objectFit="contain"
                        />
                        
                    </GalleryItem>
                    ))
            }
        </GalleryContainer>
    )
}

export default Gallery;

const GalleryContainer = styled.div`
    height: 100%;
    display: grid;
    /* grid-template-columns: repeat(3, 220px); */
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    
    grid-template-columns: repeat(2, 1fr);
    padding-right: 20px;
    padding-left: 20px;

    @media screen and (min-width: 1060px) {
        grid-template-columns: repeat(3, 220px);
    }
    @media screen and (min-width: 948px) {
        grid-template-columns: repeat(3, 180px);
    }
`

const GalleryItem = styled.div`
    width: 100%;
    height: 120px;
    overflow: hidden;
    cursor: pointer;

    @media screen and (min-width: 1060px) {
        height: 140px;
    }

    img {
        object-fit: contain !important;
        max-height: 780px;
    }
`