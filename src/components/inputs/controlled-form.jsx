import React from 'react';

class ControlledForm extends React.Component {
state = {
    name :"",
    email :"",
    password :""
}
 handleChange = event => {
    this.setState({
        [event.target.name]:event.target.value
    })
 }
    handleSubmit = event => {
        event.preventDefault();
      
        console.log(this.state);
        // event.target.reset();
        this.setState({name :"",email :"",password :""})
    }
    render() {
        const{name, email, password}= this.state;
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input className="form-control my-2" type="text" name="name" placeholder="Arshadul" value={name} onChange={this.handleChange} />
                    <input className="form-control my-2" type="email" name="email" placeholder="arshadul@gmail.com" value={email} onChange={this.handleChange} />
                    <input className="form-control my-2" type="password" name="password" placeholder="*******" value={password} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default ControlledForm