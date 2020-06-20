import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import MobileMenu from "./Nav/mobile-menu"

const Header = ({ siteTitle, resetCurrent }) => (
  <HeaderStyled>
    <h1>
      <Link to="/" onClick={resetCurrent} > {siteTitle} </Link>
    </h1>
    <MobileMenu />
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderStyled = styled.header`
  /* padding-top: 80px;
  padding-bottom: 32px; */
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (min-width: 600px) {
    margin-bottom: 80px;
  }

  h1 { 
    font-size: 12px;
    letter-spacing: 4px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Anaheim";
    z-index: 12;
    @media screen and (min-width: 2000px) {
      font-size: 14px;
    }
    a {
      color: #424141;
      text-decoration: none;
      
      transition: opacity 0.24 ease-in;

      &:hover {
          opacity: 0.8;
      }
    }
  }
`