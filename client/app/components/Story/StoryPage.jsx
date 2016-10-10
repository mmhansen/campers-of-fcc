import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
// load theme styles with webpack
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/bootstrap.css');

// ES module
import Editor from 'react-medium-editor';

//components
import { handleStorySubmit } from '../../actions/storyActions';

class StoryPage extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "",
      image: "",
      text: "lorem ipsum",
      username: "",
      time: moment().format('LL'),
      errors: {}
    }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}
//
onChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}
//
onSubmit(e){
  this.setState({ errors: {} });
  e.preventDefault();
  this.props.handleStorySubmit(this.state).then(
    ({ data }) => {
    this.setState({ errors: data })
    }
  );
}
  render (){
    let { errors, time, username } = this.state
    return (
      <div className="container" id="login-page">
   		<div className="row">
   			<div className="col-sm-12 col-md-4 col-md-offset-4">
          {time}
   			</div>

        <div className="app">
               <h1>react-medium-editor</h1>
               <h3>Html content</h3>
               <div>{this.state.text}</div>

               <h3>Editor #1 (&lt;pre&gt; tag)</h3>
               <Editor
                 tag="pre"
                 text={this.state.text}
                 onChange={this.onChange}
                 options={{toolbar: {buttons: ['bold', 'italic', 'underline']}}}
               />
               <h3>Editor #2</h3>
               <Editor
                 text={this.state.text}
                 onChange={this.onChange}
               />
             </div>

        <form onSubmit={this.onSubmit} role="form" method="post">
        </form>
     	</div>
      </div>
    )
  }
}

export default connect(null, { handleStorySubmit })(StoryPage);
