import React from "react"
import styled from "styled-components"

import Layout from "../components/Layouts/layout"
import SEO from "../components/seo"

import IconIG from "../images/icon-insta.svg"
import IconEmail from "../images/icon-envelope.svg"


const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <Container>
                <Row href="mailto:alexei.topounov@gmail.com" >
                    <IconEmail />
                    alexei.topounov@gmail.com
                </Row>
                <Row href="https://instagram.com/alexeio" target="__blank">
                    <IconIG />
                    @alexeio
                </Row>
            </Container>

        </Layout>
    )
}

export default Contact;

const Container = styled.div`
/* margin-bottom: 440px; */
    
`

const Row = styled.a`
    margin-bottom: 10px;
    display: block;
    color: #424141;
    text-decoration: none;
    transition: opacity 0.24 ease-in;

    &:hover {
        opacity: 0.8;
    }
    

    svg {
        margin-right: 8px;
        position:relative;
        top: 2px;
    }

`