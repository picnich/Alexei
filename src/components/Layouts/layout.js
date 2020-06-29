import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Div100vh from 'react-div-100vh'

import Header from "../header"
import "./layout.css"
import Nav from "../Nav"

const Layout = ({ children, hasSubmenu, next, previous, isThumbnail, setThumbnail, resetCurrent }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Div100vh>
      <HeaderWrapper>
        <Header siteTitle={data.site.siteMetadata.title} resetCurrent={resetCurrent} />
        <Sidebar>
          <Nav />
          {hasSubmenu && (
              <ThumbnailSwitcher>
                <p>
                  <span onClick={previous}>prev</span>/<span onClick={next}>Next</span>
                </p>
                <p onClick={setThumbnail}> 
                  <span>
                    {isThumbnail ? "Hide Thumbnail" : "Show Thumbnails"}
                  </span>
                </p>
              </ThumbnailSwitcher>
          )}
        </Sidebar>
      </HeaderWrapper>
      <MainContainer>{children}</MainContainer>
    </Div100vh>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



const ThumbnailSwitcher = styled.div`
    font-family: "Anaheim";
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 2px;
    margin: 0;
    padding-bottom: 10px;
    display: none;
    @media screen and (min-width: 600px) {
        display: block;
    }
    @media screen and (min-width: 2000px) {
      font-size: 12px;
    }


    p {
      margin-bottom: 10px;
      
      span {
        cursor: pointer;
        transition: opacity 0.24 ease-in;

        &:hover {
            opacity: 0.8;
        }
      }
    }
`


const HeaderWrapper = styled.div`
  position: initial;
  padding: 20px;

  @media screen and (min-width: 600px) {
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 5vw;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  /* @media screen and (min-width: 2000px) {
    padding-top: 20vh;
    padding-bottom: 20vh;
  } */
`
const MainContainer = styled.main`
  /* padding-right: 10vw; */
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

/* Moved this over to the ImageCarousel.js file! */
  /* .gatsby-image-wrapper {
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
  } */

  @media screen and (min-width: 600px) {
    height: 100%;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-left: 200px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 300px;
  }
`

const Sidebar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* height: calc(100% - 42px); */
  height: calc(100% - 100px);
`