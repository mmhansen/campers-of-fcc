// modules
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import moment from 'moment'
import classnames from 'classnames'
// locals
import * as adminActions from '../../actions/admin-actions'
import * as storyActions from '../../actions/story-actions'
import { renderField } from '../utils/formFields'
import { renderTextarea } from '../utils/textareaField'
import { validatePost as validate } from '../../utils/validation'


/*
 * Component
 */
let CreateForm = ({ role, path, name, body, errorMessage, handleSubmit, addNewStory, updateStory, approveStory, deleteStory, handleStoryBody }) => {
  /*
   * Handle Story Body Change
   */
  const onSubmit = ({ image, title, body  }) => {
    addNewStory({ body, image, title })
  }
  /*
   * Render
   */
  let time = moment().format('LL')

  return (
    <div className="col-md-8 col-sm-8 col-xs-12">
        <form onSubmit={handleSubmit(onSubmit)} >

          <Field
            id="text" name="image" placeholder="Include an image URL for your header"
            type="url" label="Image" component={renderField} />

          <Field
            id="text1" name="title" placeholder="Title" type="text"
            type="text" label="Title" component={renderField}  />

          <Field
            cols="40" id="textarea" name="body" rows="10"
            placeholder="Tell people about yourself, how you got started with FCC, and what you hope to achieve. Or something."
            type="text" label="Story" component={renderTextarea}  />

            <div className="form-group">
              <button type="submit" className="btn btn-primary cs-btn-green">Submit your story</button>
            </div>

        </form>
    </div>
  )
}
/*
 * Redux
 */

// form
CreateForm = reduxForm({
  form: 'new-story',
  validate
})(CreateForm)

// connect
const actions = Object.assign({}, adminActions, storyActions)
function mapStateToProps(state) {
  return {
    name: state.user.name,
    errorMessage: state.content.error,
    role: state.user.role,
    initialValues: {},
    body: state.content.body
  }
}
CreateForm = connect(mapStateToProps, actions)(CreateForm)

export default CreateForm
