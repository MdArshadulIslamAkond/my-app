import React from 'react';

class UnControlledForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        const data={};
        data.name =event.target.name.value; 
        data.email =event.target.email.value; 
        data.password =event.target.password.value; 
        console.log(data);
        event.target.reset();
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input className="form-control my-2" type="text" name="name" placeholder="Arshadul" />
                    <input className="form-control my-2" type="email" name="email" placeholder="arshadul@gmail.com" />
                    <input className="form-control my-2" type="password" name="password" placeholder="*******" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default UnControlledForm