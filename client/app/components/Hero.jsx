import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="container">

        <div id="hero-content">
            <div className="row" id="hero-content-centered">
                <div className="col-md-12 col-xs-11">
                    <h1 className="hero-headline">Welcome to the Campfire Stories</h1>
                    <p className="hero-copy">Place where Free Code Campers share their stories while on a quest of learning to code</p>
                    <a type="button" className="btn btn-default cs-btn-green-inverted" href="#explore-stories">Explore</a><span style={{"padding":"12px"}}>or</span>
                    <a type="button" className="btn btn-default cs-btn-green-outline" href="https://www.freecodecamp.com/" target="_blank">Join Us</a>
                </div>
            </div>
            <a href="#explore-stories">
                <span className="glyphicon glyphicon-menu-down" id="explore-stories"></span>
            </a>
        </div>

        <div id="overlay"></div>
    </section>

    <section className="section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 no-padding-picture">
                    <div id="myCarousel" className="carousel" data-ride="carousel" data-interval="100000">

                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src="/img/people-slide/1.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/2.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/3.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/4.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/5.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/6.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/7.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/8.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/9.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/10.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/11.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/12.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/13.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/14.jpg" alt="Campfire Stories People"/>
                            </div>

                            <div className="item">
                                <img src="/img/people-slide/15.jpg" alt="Campfire Stories People"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero;
