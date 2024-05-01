import React, { Component } from 'react';
import classes from './app.module.css';
import SignupForm from './signup-forms';
// import ControlledForm from './inputs';
// import UnControlledForm from './inputs/unControlled-form';
// import Inputs from './inputs';
class App extends Component{
    state = {
        users:[]
    }
    createUsers = (user)=>{
        user.id = new Date().getTime().toString()
        this.setState({
            users:[...this.state.users, user]
        })
    }
    render() {
        return(
            <div className={classes.Wrepapper}>
                <h1 className={classes.Heading}>Working with Forms in React</h1>
                <hr />
                {/* <Inputs /> */}
                {/* <UnControlledForm /> */}
                {/* <ControlledForm /> */}
                < SignupForm createUsers={this.createUsers} />
                <div>
                    <h3 className="my-5">All Registered Urers</h3>
                </div>
                <ul className="list-group">
                    {
                        this.state.users.map((user) =>(
                            <li key={user.id} className="list-group-item">
                                {user.name} = {user.email}
                            </li>
                        ))
                    }

                </ul>
                
            </div>
        )
    }
}
export default App;