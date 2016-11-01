import React, { Component } from 'react';
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux'
import moment from 'moment'
/*
 * Locals
 */

 /*
  * Component
  */
class HomePage extends Component {
  render () {

    /*
     * Render
     */
    return (
      <div>

      </div>
    )
  }
}

// /*
//  * Redux
//  */
// export default connect(null, null)(HomePage)
//
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import * as actions from '../../actions/story-actions'
// import { Link } from 'react-router'
//
// class MyStories extends Component {
//   getOneStory (e) {
//     let storyId = e.target.name;
//     this.props.getStory(storyId)
//   }
//
//   render () {
//     let { stories } = this.props;
//     let childElemenets;
//     if (stories.length === 0) {
//       childElemenets.push(
//         <h2 key={'title'}>Why not write a story?</h2>
//       )
//     } else {
//        childElemenets = stories.map((x,i) => {
//         return (
//           <div className="row" key={i}>
//             <div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-4 outer">
//               <div className="card">
//                 <h3>{x.title}</h3>
//                 <h4>Status: {x.status}</h4>
//                 <Link to="/edit" className="btn btn-primary edit" onClick={this.getOneStory.bind(this)} name={x._id}>
//                   Edit
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )
//       })
//     }
//     return (
//       <div id="my-stories">
//         <div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
//             {childElemenets}
//         </div>
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     stories: state.stories.myStories
//   }
// }
//
// export default connect(mapStateToProps, actions)(MyStories)
