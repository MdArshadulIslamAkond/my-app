import PropTypes from "prop-types";
import React from 'react';
import TextIput from "./text-input";

const Form = props=>(
    <form action="" onSubmit={props.handleSubmit}>
        <TextIput
        name="name"
        label="Enter name"
        placeholder ="Arshadul"
        value = {props.values.name}
        onChange = {props.handleChange}
        />
        <TextIput
        name="email"
        type="email"
        label="Enter email"
        placeholder ="arshadul@gmail.com"
        value = {props.values.email}
        onChange = {props.handleChange}
        />
        <TextIput
        name="password"
        type="password"
        label="Enter password"
        placeholder ="******"
        value = {props.values.password}
        onChange = {props.handleChange}
        />
        
        <button type="submit">Submit</button>
    </form>
)
Form.propTypes = {
values:PropTypes.object.isRequired,
handleChange : PropTypes.func.isRequired,
handleSubmit : PropTypes.func.isRequired
}

export default Form;