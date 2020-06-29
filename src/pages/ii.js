import React, { useState } from "react";
import { graphql } from "gatsby"

import Layout from "../components/Layouts/layout"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"
import ImageCarousel from "../components/Gallery/ImageCarousel"
import MobileGallery from "../components/Gallery/mobileGallery"

const II = ({ data }) => {
    const { contentfulGallery } = data;
    const { coverImage, images } = contentfulGallery;

    const [currentImg, setImg] = useState(0);
    const [isThumbnail, setThumbnail] = useState(false);
  
    function handleNext() {
      setImg( currentImg === images.length - 1 ? 0 : currentImg + 1 );
    }
    function handlePrevious() {
      setImg( currentImg === 0 ? images.length - 1 : currentImg - 1 );
    }
  
  
    return (
        <Layout 
            hasSubmenu={true} 
            next={handleNext}
            previous={handlePrevious}
            isThumbnail={isThumbnail}
            setThumbnail={() => setThumbnail(!isThumbnail)}
            resetCurrent={() => setImg(0)}
            >
            <SEO title="II" />
            <MobileGallery items={images} />
            {
                isThumbnail ? (
                <Gallery 
                    items={images} 
                    current={currentImg}  
                    handleClick={ (i) => {
                    setImg(i);
                    setThumbnail(false);
                    }}
                    isThumbnail={isThumbnail}
                    isSinglePage={false}
                />
                ) : (
                <ImageCarousel 
                    current={images[currentImg]}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    isDouble={true}
                    isCover={currentImg === 0}
                    isLast={currentImg === images.length - 1}
                /> 
                )
            }
            
            </Layout>
    )
}

export default II;

export const query = graphql`
  query GalleryIIQuery {
    contentfulGallery(galleryName: {eq: "Gallery II"}) {
      images {
        fluid(maxHeight: 1200, quality: 100) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`

