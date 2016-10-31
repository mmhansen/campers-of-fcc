import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer'
require('./stylesheets/style.scss')

const Main = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      {/* Footer */}
      <Footer />

    </div>
  )
}
export default Main;


// {/* Content */}
// { children }
