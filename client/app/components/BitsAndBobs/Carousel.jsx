import React from 'react';

const img1 = require('../../../public/img/people-slide/1.jpg');
const img2 = require('../../../public/img/people-slide/2.jpg');
const img3 = require('../../../public/img/people-slide/3.jpg');
const img4 = require('../../../public/img/people-slide/4.jpg');
const img5 = require('../../../public/img/people-slide/5.jpg');
const img6 = require('../../../public/img/people-slide/6.jpg');
const img7 = require('../../../public/img/people-slide/7.jpg');
const img8 = require('../../../public/img/people-slide/8.jpg');
const img9 = require('../../../public/img/people-slide/9.jpg');
const img10 = require('../../../public/img/people-slide/10.jpg');
const img11 = require('../../../public/img/people-slide/11.jpg');
const img12 = require('../../../public/img/people-slide/12.jpg');
const img13 = require('../../../public/img/people-slide/13.jpg');
const img14 = require('../../../public/img/people-slide/14.jpg');
const img15 = require('../../../public/img/people-slide/15.jpg');

// preserve original slide order
const picSrcNumber = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5];
const images = [ img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img1, img2, img3, img4, img5 ]

const Carousel = () => {
  const slides = images.map((img, i) => {
    if (i === 0) {
      return (
        <div className="item active" key={i}>
          <img src={img} alt="Campfire Stories People"/>
        </div>
      )
    } else {
      return (
        <div className="item" key={i}>
          <img src={img} alt="Campfire Stories People"/>
        </div>
      )
    }
  });
  return (
    <section className="section">
        <div className="container-fluid">
            <div className="row">
              <div id="myCarousel" className="carousel" data-ride="carousel" data-interval="2000">
                <div className="carousel-inner" role="listbox">
                  {slides}
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Carousel;
