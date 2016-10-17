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
      text: "",
      username: "exampleUsername",
      time: moment().format('LL'),
      errors: {}
    }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.onChangeMediumEditor = this.onChangeMediumEditor.bind(this);
}
//
onChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

onChangeMediumEditor(text, medium){
  this.setState({
    text: medium['elements'][0]['innerHTML']
  })
}

onSubmit(event){
  this.setState({ errors: {} });
  this.props.handleStorySubmit(this.state).then(
    ({ data }) => {
    this.setState({ errors: data })
    }
  );
}

  render (){
    
    let { errors, time, username, title, image, text } = this.state

    return (
      <div className="container-fluid" id="story-form">
      <div className="row">
          <div className="col-sm-12 col-md-6">
          <form className="storyForm">
          <h2>Create</h2>
          <p>{time}</p>
          <div className="form-group">
          <label>Name
          <input
            className="form-control"
            name="username"
            type="text"
            value={username}
            onChange={this.onChange} 
            disabled/>
          </label>
          </div>
          <div className="form-group">
          <label>Image
          <input
            className="form-control"
            name="image"          
            type="url"
            value={image}
            onChange={this.onChange} />
          </label>  
          </div>
          <div className="form-group">
          <label>Title
          <input
            className="form-control"          
            name="title"
            type="text"
            value={title}
            onChange={this.onChange} 
            placeholder="A short title for your submission" />
          </label>
          </div>
          <div className="form-group">
          <h3>Tell your story</h3>
          <Editor
            className="form-control"          
            data-placeholder="Tell people about yourself, how you got started with FCC, and what you hope to achieve. Or something."
            text={text}
            onChange={this.onChangeMediumEditor}
            options={{toolbar: {buttons: ['bold', 'italic', 'underline','anchor']}}}
          />
          </div>
          <input type="submit" value="Post" className="btn btn-primary pull-right"/>          
          </form>       
        </div>
        <div className="col-sm-12 col-md-3 col-md-offset-1 well well-sm">
          <h2>Tips for greatness</h2>
          <ol>
            <li>Make sure to include X,Y,Z</li>
            <li>Highlight text to apply formatting</li>
            <li>Have fun</li>
          </ol>
        </div>        
      </div>
      </div>
    )
  }
}

export default connect(null, { handleStorySubmit })(StoryPage);
