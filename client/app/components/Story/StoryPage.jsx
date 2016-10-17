import React from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm } from 'redux-form'
import moment from 'moment'
// load theme styles with webpack
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/bootstrap.css');

// ES module
import Editor from 'react-medium-editor';

//components
import { addNewStory } from '../../actions/story-actions';
import { renderField } from '../common/formFields'

const newStoryForm = reduxForm({
  form: 'new-story'
})

class StoryPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      story: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeMediumEditor = this.onChangeMediumEditor.bind(this);
  }

  onChangeMediumEditor(text, medium){
    this.setState({
      story: medium['elements'][0]['innerHTML']
    })
  }

  onSubmit({username, image, title}){
    let body = this.state.story
    this.props.addNewStory({username, image, title, body})
  }

  render (){

    let { handleSubmit, userFullName } = this.props
    let time = moment().format('LL')
    let { story } = this.state

    return (
      <div className="container-fluid" id="story-form">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <form onSubmit={handleSubmit(this.onSubmit)} className="storyForm">
              <h2>Create</h2>
              <p>{time}</p>
              <Field type="text" name="username" component={renderField} label="Name"
                    props={{value: userFullName}} disabled />
              <Field type="url" name="image" component={renderField} label="Image" />
              <Field type="text" name="title" component={renderField} label="Title"
                    placeholder="A short title for your submission" />
              <div className="form-group">
                <h3>Tell your story</h3>
                <Editor
                  className="form-control"
                  data-placeholder="Tell people about yourself, how you got started with FCC, and what you hope to achieve. Or something."
                  text={story}
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

function mapStateToProps(state) {
  return {
    userFullName: state.user.userFullName
  }
}

export default connect(mapStateToProps, { addNewStory })(newStoryForm(StoryPage));
