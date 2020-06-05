import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layouts/layout"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"
import ImageCarousel from "../components/Gallery/ImageCarousel"

const IndexPage = ({ data }) => {
  // const Imgs = new Array(20).fill('');
  const { contentfulGallery } = data;
  const { coverImage, images } = contentfulGallery;
  // console.log(coverImage, images);
  // const Imgs = [
  //   "https://images.unsplash.com/photo-1587613980697-aaf1a97de24c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1590845487056-6d1994992c46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1590767602124-234d1714ed92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1590931743459-ae6695ba1fe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1590934185846-5686f59fd782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1590818048709-2d2d042a5aff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  // ]
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
      {/* <h2>{currentImg }/{Imgs.length}</h2>
      <h2>{isThumbnail ? "yes" : "no"}</h2> */}
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

