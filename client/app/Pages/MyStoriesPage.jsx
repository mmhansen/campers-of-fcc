import React, { Component } from 'react';
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router'
import * as actions from '../actions/story-actions'
import classnames from 'classnames'
/*
 *
 */
 $(document).ready(function () {
     $('.grid').isotope({
         itemSelector: '.grid-item',
         percentPosition: true,
         masonry: {
             columnWidth: '.col-md-6'
         }
     });

     $('.grid-1').isotope({
         itemSelector: '.grid-item-1',
         percentPosition: true,
         masonry: {
             columnWidth: '.col-md-4'
         }
     });
 })


 /*
  * Component
  */
class MyStoryPage extends Component {
  componentWillMount(){
    // get my submitted stories
    this.props.getMyStories()
  }
  render () {
    let { submitted } = this.props;
    let childElemenets = [];
    if (submitted.length === 0) {
      childElemenets.push(
        <div className="col-md-4 col-md-offset-4 no-story">
          <Link to="/story">
            <h2 key={'title'}>Why not write a story?</h2>
          </Link>
        </div>
      )
    } else {
       childElemenets = submitted.map((x,i) => {
        return (
            <div key={i} className="col-md-4 grid-item-1">
                <div className="thumbnail">
                    <img src={x.image} alt="Campfire Story" />
                    <div className="caption no-border-bottom">
                        <div className="card-title">
                            <h4>{x.title}
                              <Link to={`/edit/${x._id}`} className="pull-right card-buttons">
                                <span className="glyphicon glyphicon-edit"></span>
                              </Link>
                            </h4>
                            <p className="status">
                                Status: <span className={classnames("",{ "published" : (x.status === 'Approved')} )} > { x.status } </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
      })
    }
    return (
      <section className="section bg-white top-offset">
        <section className="container">
            <div className="row grid-1">

              { childElemenets }

            </div>
        </section>
    </section>
    );
  }
}

/*
 * Redux
 */
const mapStateToProps = (state) => {
  return {
    submitted: state.content.submitted
  }
}

export default connect(mapStateToProps, actions)(MyStoryPage)
