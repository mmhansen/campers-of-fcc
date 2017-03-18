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
let EditForm = ({ role, path, name, body, errorMessage, handleSubmit, updateStory, approveStory, deleteStory, handleStoryBody }) => {
  /*
   * Handle Story Body Change
   */
   let pattern = /[a-f0-9]{24}/;

  const onSubmit = ({ image, title, body  }) => {
    // update story
    let id = path.match(pattern)
    updateStory({ body, image, title }, id)
  }
  let time = moment().format('LL')
  // Buttons
  let childButtons = [ <button key="1" type="submit" className="btn btn-primary cs-btn-green">Update</button> ]
  if (role === 'Admin') {
    childButtons = childButtons.concat([
      <button key="2" onClick={() => approveStory(path.match(pattern)) } className="btn btn-primary cs-btn-blue admin-btn">Approve</button>,
      <button key="3" onClick={() => deleteStory(path.match(pattern)) } className="btn btn-primary cs-btn-green admin-btn">Delete</button>
    ])
  }

  return (
    <div className="col-md-8 col-sm-8 col-xs-12">
        <form onSubmit={handleSubmit(onSubmit)} >

          <Field key={1}
            id="text" name="image" placeholder="Include an image URL for your header"
            type="url" label="Image" component={renderField} />

          <Field key={2}
            id="text1" name="title" placeholder="Title" type="text"
            type="text" label="Title" component={renderField}  />

          <Field key={3}
            cols="40" id="textarea" name="body" rows="10"
            placeholder="Tell people about yourself, how you got started with FCC, and what you hope to achieve. Or something."
            type="text" label="Story" component={renderTextarea}  />

            <div className="form-group">
              { childButtons }

            </div>

        </form>
    </div>
  )
}
/*         <FormButton />
 * Redux
 */

// form
EditForm = reduxForm({
  form: 'new-story',
  validate
})(EditForm)

// connect
const actions = Object.assign({}, adminActions, storyActions)
// form preloading
function matchStory(state){
  const path = state.content.path.slice(6)
  const role = state.user.role
  let preload = { initialValues: {}, body: '' };
  let lookup;
  //
  if (role === 'Member') {
    lookup = state.content.submitted
  }
  if (role === 'Admin') {
    lookup =  [...state.content.submitted, ...state.content.adminStories]
  }

  lookup = lookup.filter(( story ) => {
    return (story._id === path)
  })[0]
  //
  preload.initialValues = {title: lookup.title, image: lookup.image, body: lookup.body}
  return preload;

}


function mapStateToProps(state) {
  return {
    name: state.user.name,
    errorMessage: state.content.error,
    role: state.user.role,
    ...matchStory(state)
  }
}
EditForm = connect(mapStateToProps, actions)(EditForm)

export default EditForm
