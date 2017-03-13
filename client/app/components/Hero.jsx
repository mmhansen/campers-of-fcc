import React from 'react';
import Carousel from './BitsAndBobs/Carousel';

const Hero = () => {
  return (
    <div className="hero-top">

      <section className="container">
        <div id="hero-content">
            <div className="row" id="hero-content-centered">
                <div className="col-md-12 col-xs-11">
                    <h1 className="hero-headline">Welcome to the Campfire Stories</h1>
                    <p className="hero-copy">Place where people from all over the world share their stories while on a quest of learning to code</p>
                    <a type="button" className="btn btn-default cs-btn-green-inverted" href="#explore-stories">Explore</a><span style={{"padding":"12px"}}>or</span>
                    <a type="button" className="btn btn-default cs-btn-green-outline" href="https://tropicalchancer.github.io/projectus/" target="_blank">Join Us</a>
                </div>
            </div>
            <a href="#explore-stories">
                <span className="glyphicon glyphicon-menu-down" id="explore-stories"></span>
            </a>
        </div>
        <div id="overlay"></div>
    </section>

    <Carousel />

    </div>
  )
}

export default Hero;
