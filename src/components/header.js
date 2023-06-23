import * as React from "react"
import { Link } from "gatsby"
import logo from '../images/pawduck_logo.png';

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <img
      alt="pawduck logo"
      height={40}
      style={{ margin: 0 }}
      src={logo} /> 
  
      </header>
)

export default Header
