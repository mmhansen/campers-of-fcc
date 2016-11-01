import React from 'react'
import classnames from 'classnames'

exports.renderField = (field) => {
  //console.log(field)
  return (<div className={classnames('form-group', {'has-error': field.meta.visited && field.meta.invalid})}>
  <label className="control-label" >{field.label}</label>
  <input {...field.input} className="form-control" placeholder={field.placeholder}
    type={field.type} disabled={field.disabled} />
  {field.meta.touched && field.meta.error && <div className="text-danger">{field.meta.error}</div>}
</div>)
}


exports.renderAlert = (errorMessage) => {
  if(errorMessage) {
    return (
      <div className="alert alert-danger">
        <span><strong>Error!</strong> {errorMessage}</span>
      </div>
    );
  }
}
