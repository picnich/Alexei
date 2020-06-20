import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Gallery = ({ items, current, handleClick, isThumbnail, isSinglePage }) => {
    const removedItems = items.slice(1);
    return (
        <GalleryContainer isThumbnail={isThumbnail} isSinglePage={isSinglePage} >
            {
                removedItems.map( (item, i) => (
                    isSinglePage ? (
                        <GalleryItemSingle 
                            key={i} 
                            isCurrent={current === i}
                            onClick={ () => handleClick(i + 1)}
                            isSinglePage={isSinglePage}
                        >
                            <Img 
                                key={item.fluid.src}
                                fluid={item.fluid}
                                objectFit="contain"
                                // imgStyle={{
                                //     objectFit: "contain",
                                //     objectPosition: "50% 50%",
                                //     maxHeight: "280px"
                                // }}
                            />
                            
                        </GalleryItemSingle>
                    ) : (
                        <GalleryItemDouble 
                            key={i} 
                            isCurrent={current === i}
                            onClick={ () => handleClick(i + 1)}
                        >
                            <Img 
                                key={item.fluid.src}
                                fluid={item.fluid}
                                objectFit="contain"
                            />
                            
                        </GalleryItemDouble>
                    )
                        
                ))
            }
        </GalleryContainer>
    )
}

export default Gallery;

const GalleryContainer = styled.div`
    display: grid;
    /* grid-template-columns: repeat(3, 220px); */
    height: ${ props => props.isSinglePage ? "100%" : "50%"};;
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    
    grid-template-columns: repeat(2, 1fr);
    padding-right: 20px;
    padding-left: 20px;

    @media screen and (max-width: 600px) {
        display: none;
    }
    @media screen and (min-width: 948px) {
        grid-template-columns: repeat(3, 180px);
    }
    @media screen and (min-width: 1060px) {
        /* grid-template-columns: repeat(3, 220px); */
        grid-template-columns: repeat(3, 280px);
        grid-gap: 24px;
    }
`

const GalleryItemSingle = styled.div`
    /* &:nth-child(1) {
        display: none;
    } */
    width: 100%;
    height: 120px;
    overflow: hidden;
    cursor: pointer;

    img {
        object-fit: contain !important;
        max-height: 200px;
    }
    @media screen and (min-width: 948px) {
        height: 140px;
    }
    @media screen and (min-width: 1060px) {
        height: 180px;

        /* 1/9 */
        /* First of Three Rows */
        &:nth-child(9n + 1 ) {
            transform: scale(0.8) translate(10%, 0%);
        }
        /* 2/9 */
        &:nth-child(9n + 2 ) {
            transform: scale(0.8) translate(-10%, 20%);
        }
        /* 3/9 */
        &:nth-child(9n + 3 ) {
            transform: scale(.95) translate(-20%,5%);
        }

        /* Row 2 */
        /* Row 2 Col 1 */
        &:nth-child(9n + 4 ) {
            transform: scale(0.8) translate(25%,0%);
        }
        /* Row 2 Col 2 */
        &:nth-child(9n + 5 ) {
            transform: scale(0.8) translate(10%,3%);
        }
        /* Row 2 Col 3 */
        &:nth-child(9n + 6 ) {
            transform: scale(1.05) translate(3%,1%);
        }

        /* Row 3 */
        /* Row 3 Col 1 */
        &:nth-child(9n + 7 ) {
            transform: scale(1.1) translate(-20%,-10%);
        }
        /* Row 3 Col 2 */
        &:nth-child(9n + 8 ) {
            transform: scale(1) translate(-13%,0%);
        }
        /* Row 3 Col 3 */
        &:nth-child(9n + 9 ) {
            transform: scale(0.8) translate(-27%,-5%);
        }

    }




`

const GalleryItemDouble = styled.div`
    &:nth-child(1) {
        display: none;
    }
    width: 100%;
    height: 120px;
    overflow: hidden;
    cursor: pointer;
    display: grid;

    @media screen and (min-width: 948px) {
        height: 140px;
    }
    @media screen and (min-width: 1060px) {
        height: 100px;
    }

    img {
        object-fit: contain !important;
        max-height: 780px;
    }
`