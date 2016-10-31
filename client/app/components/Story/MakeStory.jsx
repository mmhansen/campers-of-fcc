import React from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm } from 'redux-form'
import moment from 'moment'
import classnames from 'classnames'
// load theme styles with webpack
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/bootstrap.css');

// ES module
import Editor from 'react-medium-editor';

//components
import { addNewStory, createStoryValidationError, getStory, removeCurrent, getMyStories } from '../../actions/story-actions';
import { renderField } from '../common/formFields'
import { validatePost as validate } from '../../utils/validation'


class MakeStory extends React.Component {
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

  onSubmit({image, title}){
    let body = this.state.story
    if (!body || body.length < 10) {
      this.props.createStoryValidationError("You definitly need a story, please write one.")
      return
    }
    this.props.addNewStory({image, title, body})
    this.props.getMyStories();
  }

  render (){

    let { handleSubmit, userFullName, errorMessage } = this.props
    let time = moment().format('LL')
    let { story } = this.state

    return (
      <div id="story-form" className="row">
        {/* Content */}
        <div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-1">
          <form onSubmit={handleSubmit(this.onSubmit)} className="storyForm">
            <h2>Tell Your Coding Story</h2>
            <hr />
            <div className="row">
              <div className="col-sm-6">
                <h4>{userFullName}</h4>
              </div>
              <div className="col-sm-6">
                <h4>{time}</h4>
              </div>
            </div>
            <div className="row">

            </div>
            <Field type="url" label="Image" name="image" component={renderField} placeholder="Include an image url for your header"/>
            <Field type="text" label="Title" name="title" component={renderField} placeholder="Title" />
            <div className={classnames('form-group', {'has-error': errorMessage})}>
              <br />
              <Editor
                className="form-control"
                data-placeholder="Double click on text to style."
                text={story}
                onChange={this.onChangeMediumEditor}
                options={{toolbar: {buttons: ['bold', 'italic', 'underline','anchor']}}}
                />
              {errorMessage && <div className="text-danger">{errorMessage}</div>}
            </div>
            <input type="submit" value="Submit your story" className="btn btn-primary"/>
          </form>
        </div>
        {/* Tips */}
        <div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-0 ">
          <h2>Tips</h2>
          <ol>
            <li>Tell people about yourself, how you got started with FCC, and what you hope to achieve. Or something. </li>
            <li>Highlight text to apply formatting</li>
          </ol>
        </div>
      </div>
    )
  }
}

const newStoryForm = reduxForm({
  form: 'new-story',
  validate
})


function mapStateToProps(state) {
  let current = state.stories.currentStory
  return {
    userFullName: state.user.userFullName,
    errorMessage: state.stories.error
  }
}

export default connect(mapStateToProps, { addNewStory, createStoryValidationError, getMyStories })(newStoryForm(MakeStory));
