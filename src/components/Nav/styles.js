import styled from "styled-components"

export const StyledMobileMenu = styled.nav`
    display: block;
    @media screen and (min-width: 600px) {
        display: none;
    }

    ul {
        display: flex;
        flex-direction: column;
        z-index: 5;
        li {
            margin-bottom: 1rem;
            z-index: 2;
            text-align: center;

            a {
                color: #424141;
                font-size: 14px;
                font-weight: normal;
                letter-spacing: 4px;
                text-decoration: none;

                &.active.red {
                    color: #e21e25;
                    font-weight: bold;
                }
                &.active.yellow {
                    color: #F8BF2D;
                    font-weight: bold;
                }
                &.active.green {
                    color: #3FA738;
                    font-weight: bold;
                }
            }
        }
    }
`

export const Menu = styled.ul`
    padding: 0;
    text-decoration: none;
    list-style: none;
    margin: 0;
    display: none;
    @media screen and (min-width: 600px) {
        display: block;
    }

    li {
        margin: 0;

        a {
            color: #424141;
            font-size: 14px;
            font-weight: normal;
            letter-spacing: 4px;
            text-decoration: none;
            transition: opacity 0.24 ease-in;

            &:hover {
                opacity: 0.8;
            }

            &.active.red {
                color: #e21e25;
                font-weight: bold;
            }
            &.active.yellow {
                color: #F8BF2D;
                font-weight: bold;
            }
            &.active.green {
                color: #3FA738;
                font-weight: bold;
            }
        }
    }
`