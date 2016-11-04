import React from 'react'

const Hero = () => {
  return (
    <section className="container">
      {/* Hero Content */}
      <div id="hero-content">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <h1 className="hero-headline">Welcome to the Campfire Stories</h1>
            <p className="hero-copy">Place where Free Code Campers share their stories while on a quest of learning to code</p>
            <a type="button" className="btn btn-default cs-btn-green-inverted" href="#">Explore Stories</a>
            <span style={{padding: "0 12px"}}>or</span>
            <a type="button" className="btn btn-default cs-btn-green-outline" href="https://www.freecodecamp.com/" target="_blank">Become Part of Us</a>
          </div>
        </div>
      </div>
      {/* Video Bg */}
      <div className="fullscreen-bg">
        <video loop muted autoPlay poster="http://touchcielo.com/alive/vid/vid.jpg" className="fullscreen-bg__video">
            <source src="http://touchcielo.com/alive/vid/vid.webm" type="video/webm" />
            <source src="http://touchcielo.com/alive/vid/vid.mp4" type="video/mp4" />
            <source src="http://touchcielo.com/alive/vid/vid.ogv" type="video/ogg" />
        </video>
      </div>
      {/* Gradient */}
      <div id="overlay" />
      {/* Arrow Down */}
      <a href="#">
        <span className="glyphicon glyphicon-menu-down" id="explore-stories"></span>
      </a>
    </section>
  )
}

export default Hero;
