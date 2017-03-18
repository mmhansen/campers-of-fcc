import React from 'react';
import { IndexLink } from 'react-router'

/*
 * Navbar Component
 */
const NavbarHeader = () => {
  return (
    <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        {/* Home Link */}
        <IndexLink to="/" activeClassName="active" id="home" className="navbar-brand" rel="home" href="#">
          <img style={{"maxHeight":"50px"}}
          src="/img/cs-logo.svg" />
        </IndexLink>
    </div>
  )
}

export default NavbarHeader;
