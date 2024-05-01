import PropTypes from "prop-types";
import React from 'react';


const TextIput = props=>(
    <div className="form-group" >
        <label htmlFor={props.name}>{props.label}</label>
        <input className={props.error?"form-control is-invalid":"form-control"} type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        {props.error && (<div className="invalid-feedback">{props.error}</div>)}
    </div>
)
TextIput.propTypes={
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error : PropTypes.string
}
TextIput.defaultProps ={
    type:"text",
    label:"",
    placeholder: ""
}
export default TextIput;