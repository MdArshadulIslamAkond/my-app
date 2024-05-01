import PropTypes from "prop-types";
import React from 'react';
import TextIput from './text-input';

const Form = ({values,agreement,errors, handleAgreement, handleChange,handleSubmit})=>(
    <form onSubmit={handleSubmit}>
       < TextIput
    className="form-group"
      name="name"
      label="name"
      placeholder="Arshadul"
      value={values.name}
      error ={errors.name}
      onChange={handleChange}
      />
      < TextIput
      className="form-group"
      name="email"
      type="email"
      label="email"
      placeholder="arshadul@gmail.com"
      value ={values.email}
      error ={errors.email}
      onChange={handleChange}
      />
      < TextIput
      className="form-group"
      name="password"
      type="password"
      label="Password"
      placeholder="*******"
      value ={values.password}
      error ={errors.password}
      onChange={handleChange}
      />
      < TextIput
      name="birthDate"
      type="date"
      label="BirthDate"
      value ={values.birthDate}
      error ={errors.birthDate}
      onChange={handleChange}
      />
      <div className="form-group">
          <label className="me-4">
              <input className=" me-2" type="radio" name="gender" value="Male" onChange={handleChange} /> Male
          </label>
          <label className="me-4">
              <input className="me-2" type="radio" name="gender" value="Female" onChange={handleChange} /> Female
          </label>
          <label className="me-4">
              <input className="me-2" type="radio" name="gender" value="Other" onChange={handleChange} /> Other
          </label>
          {errors.gender && (<div className="invalid-feedback">{errors.gender}</div>)}
      </div>
      <div className="form-group" >
       <label>
       <input type="checkbox" name="agreement" id="" checked={agreement} onChange={handleAgreement} />
       I Agree
       </label>
      </div>
      <button className="btn btn-primary" type="submit" disabled ={!agreement}>Create User</button>
  </form>
)
Form.propTypes = {
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit : PropTypes.func.isRequired,
    // onChange : PropTypes.func.isRequired
}
export default Form;