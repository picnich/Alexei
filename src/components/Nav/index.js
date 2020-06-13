import React from "react"
import { Link } from "gatsby"
import {
    Menu
} from "./styles"


export default () => {
    return (
        <Menu>
            <li><Link to="/" activeClassName="active red">I</Link></li>
            <li><Link to="/ii/" activeClassName="active yellow">II</Link></li>
            <li><Link to="/contact/" activeClassName="active green">CONTACT</Link></li>
        </Menu>
    )
}