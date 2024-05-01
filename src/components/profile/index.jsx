import React from 'react';
import Bio from './bio';
import Links from './links';
import "./profile.style.css";
import Skills from './skills';



class Profile extends React.Component {
    me ={
        name:"Md. Arshadul Islam Akond",
        title: "Fullstack Javascript Developer",
        skillA:"Java",
        skillB:"Javascript",
        skillC:"Python"
    }
    render() { 
        return(
            <div className="Container">
                <Bio name={this.me.name} title={this.me.title}/>
                <Skills skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC} />
               <Links /> 
            </div>
        )
     }
}
export default Profile;