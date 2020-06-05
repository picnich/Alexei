/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Div100vh from 'react-div-100vh'

import Header from "../header"
import "./layout.css"
import Nav from "../Nav"

const LayoutOG = ({ children, hasSubmenu, next, previous, isThumbnail, setThumbnail }) => {
  return (
    <Container>
      <Header siteTitle={`Alexei Topounov`} />
      <Grid>
        <LSB>
          <Nav />
          {hasSubmenu && (
            <div>
              <p>
                <span onClick={previous}>prev</span>
                <span onClick={next}>Next</span>
              </p>
              <p onClick={setThumbnail}> {isThumbnail ? "Hide Thumbnail" : "Show Thumbnails"}</p>
            </div>
          )}
        </LSB>
        <main>{children}</main>
      </Grid>
    </Container>
  )
}

LayoutOG.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutOG

const Container = styled(Div100vh)`
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`

const Grid = styled.section`
  display: grid;
  @media screen and (min-width: 600px) {
    grid-template-columns: 120px 1fr;
  }
  height: calc(100vh - 194px);
  
  /* main { 
    background: #eee;
  } */
  `
const LSB = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    height: 100%;
    flex-direction: column;
  }
`