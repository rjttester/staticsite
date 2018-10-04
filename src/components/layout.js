import React from "react"
import {Link} from "gatsby"

const ListLink = props=>(
    <li style={{display:'inline-block',marginRight:'1em'}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default({children}) => (
    <div style={{margin:'0 auto',maxWidth:650,padding:'0.1rem'}}>
        
        <header style={{margin:'0 auto',maxWidth:650,padding:'1.25rem 1rem'}}>
            <Link to="/" style={{textShadow:'none',backgroundImage:'none'}}>
                <h3 style={{ display: `inline` }}>RJT Sample</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        </header>
        
        {children}

        <footer>
            Copyright &copy; 2018
        </footer>

    </div>
)