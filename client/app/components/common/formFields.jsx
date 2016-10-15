import React from 'react'
import classnames from 'classnames'

exports.renderField = (field) => (
  <div className={classnames('form-group', {'has-error': field.meta.error})}>
    <label className="control-label" >{field.label}</label>
    <div>
      <input {...field.input} className="form-control" placeholder={field.label} type={field.type} />
      {field.meta.touched && field.meta.error && <div className="text-danger">{field.meta.error}</div>}
    </div>
  </div>
)

exports.renderAlert = (errorMessage) => {
  if(errorMessage) {
    return (
      <div className="alert alert-danger">
        <span><strong>Error!</strong> {errorMessage}</span>
      </div>
    );
  }
}
