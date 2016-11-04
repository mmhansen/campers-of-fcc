import React from 'react';
import NavbarLinks from './NavbarLinks'
import NavbarHeader from './NavbarHeader'
/*
 * Navbar Component
 */
const Navbar = () => {
  return (
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <NavbarHeader />
        <NavbarLinks />
    </div>
  </div>
  )
}

export default Navbar;
