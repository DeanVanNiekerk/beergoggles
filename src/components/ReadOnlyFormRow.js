import React from 'react'

const Error = ({ title, value }) => (
    <div className="form-group row">
    <label className="col-sm-5 col-form-label font-weight-bold">{title}</label>
    <div className="col-sm-7">
      <input type="text" readOnly className="form-control-plaintext text-light" value={value} />
    </div>
  </div>
)

export default Error