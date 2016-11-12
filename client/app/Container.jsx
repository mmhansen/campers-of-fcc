import React from 'react';
import Nav from './components/Navbar/Nav';
import Footer from './components/BitsAndBobs/Footer'
require('./stylesheets/style.scss')

const Container = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      {/* Content */}
      { children }
      {/* Footer */}
      <Footer /> 
    </div>
  )
}
export default Container;
