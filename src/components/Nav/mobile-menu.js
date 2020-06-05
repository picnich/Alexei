import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import {
    StyledMobileMenu,
    Menu
} from "./styles"

const MobileMenu = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    return (
        <StyledMobileMenu>
            <MenuBtn onClick={() => setNavOpen(true)}>Menu</MenuBtn>
            {
                isNavOpen && (
                    <MobileMenuContainer>
                        <Overlay />
                        <Menu>
                            <li><Link activeClassName="active red" to="/" >I</Link></li>
                            <li><Link activeClassName="active yellow" to="/ii/">II</Link></li>
                            <li><Link activeClassName="active green" to="/contact/">CONTACT</Link></li>
                        </Menu>
                        <Close onClick={ () => setNavOpen(false) }>Close</Close>
                    </MobileMenuContainer>
                )
            }
        </StyledMobileMenu>
    )
}
export default MobileMenu;

const MobileMenuContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`

const Overlay = styled.div`
    z-index: 1;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Close = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 1;
    cursor: pointer;
`

const MenuBtn = styled.div`
    cursor: pointer;
`