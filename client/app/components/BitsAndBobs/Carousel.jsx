import React from 'react';

// preserve original slide order
const picSrcNumber = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5];

const Carousel = () => {
  const slides = picSrcNumber.map((num, i) => {
    if (num === 6) {
      return (
        <div className="item active" key={i}>
            <img src="/img/people-slide/6.jpg" alt="Campfire Stories People"/>
        </div>
      )
    } else {
      return (
        <div className="item" key={i}>
            <img src={"/img/people-slide/" + num + ".jpg"} alt="Campfire Stories People"/>
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
  