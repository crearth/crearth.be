import React from "react"
import navStyles from "./nav.module.css"
import { Link } from "gatsby"

const Header = () => {
    return(
        <div className={navStyles.nav}>
            <div className={navStyles.navbar}>
                <p><Link 
                    to="/"
                    style={{textDecoration: `none`, color: `white`}}>crearth</Link></p>
                <ul>
                <li><Link to="/projects"
                style={{textDecoration: `none`,}}>Projects</Link></li>
                <li>About</li>
                </ul>  
            </div>
        </div>

    )
}

export default Header