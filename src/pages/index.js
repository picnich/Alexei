import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layouts/layout"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"
import ImageCarousel from "../components/Gallery/ImageCarousel"
import MobileGallery from "../components/Gallery/mobileGallery"

const IndexPage = ({ data }) => {
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
      <SEO title="Home" />
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
            isSinglePage={true}
          />
        ) : (
          <ImageCarousel 
            current={images[currentImg]}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          /> 
        )
      }
    
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query GalleryIQuery {
    contentfulGallery(galleryName: {eq: "Gallery I"}) {
      coverImage {
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      images {
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`

