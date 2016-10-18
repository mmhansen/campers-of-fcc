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
import { addNewStory, createStoryValidationError } from '../../actions/story-actions';
import { renderField } from '../common/formFields'
import { validatePost as validate } from '../../utils/validation'

const newStoryForm = reduxForm({
  form: 'new-story',
  validate
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
    console.log(body)
    if (!body || body.length < 1) {
      this.props.createStoryValidationError("You definitly need a story, please write one.")
      return
    }
    this.props.addNewStory({username, image, title, body})
  }

  render (){

    let { handleSubmit, userFullName, errorMessage } = this.props
    let time = moment().format('LL')
    let { story } = this.state

    return (
      <div id="story-form" className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">

          <div className="row">
            {/* Content */}
            <div className="col-sm-9">
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
                <Field type="url" name="image" component={renderField} placeholder="Include an image url for your header"/>
                <Field type="text" name="title" component={renderField}
                  placeholder="Title" />
                <div className={classnames('form-group', {'has-error': errorMessage})}>

                  <Editor
                    className="form-control"
                    data-placeholder="Double click on text to style."
                    text={story}
                    onChange={this.onChangeMediumEditor}
                    options={{toolbar: {buttons: ['bold', 'italic', 'underline','anchor']}}}
                    />
                  {errorMessage && <div className="text-danger">{errorMessage}</div>}
                </div>
                <input type="submit" value="Post" className="btn btn-primary pull-right"/>
              </form>
            </div>
            {/* Tips */}
            <div className="col-sm-3">
              <h2>Tips</h2>
              <ol>
                <li>Make sure to include X,Y,Z</li>
                <li>Highlight text to apply formatting</li>
                <li>Have fun</li>
                <li>Tell people about yourself, how you got started with FCC, and what you hope to achieve. Or something. </li>
              </ol>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userFullName: state.user.userFullName,
    errorMessage: state.stories.error
  }
}

export default connect(mapStateToProps, { addNewStory, createStoryValidationError })(newStoryForm(StoryPage));
