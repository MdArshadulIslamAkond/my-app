import React from 'react';

class Inputs extends React.Component {
    state = {
        name:"",
        country:"",
        bio :"",
        birthDay :"",
        gender:"",
        agree:false,
        skills:[]
    }

    hendleChange =event => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    hendleChackBox = event => {
      this.setState({
        agree:  event.target.checked
      })
    }
    hendleSkillChange = event => {
        console.log(event.target.checked)
        if(event.target.checked){
            this.setState({
                skills:  [...this.state.skills, event.target.value]
            })
        }else{
            const skills = this.state.skills.filter(skill=> skill!== event.target.value)
            this.setState({skills})
        }
    }
    render() {
        const {name,country,bio,birthDay,agree,skills} = this.state
        return(
            <div>
               <input onChange={this.hendleChange} value={name} className="form-control my-2" type="text" name="name" id="" placeholder="Arshadul Islam" />
               <select onChange={this.hendleChange} value={country} className="form-control my-2" name="country" id="">
                <option > Select your country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Nepal">Nepal</option>
                <option value="Buthan">Buthan</option>
               </select>
               <textarea onChange={this.hendleChange} value={bio} className="form-control my-2" name="bio" id="" cols="30" rows="10" placeholder="Tell Me About Yourself"></textarea>
               <input onChange={this.hendleChange} value={birthDay} className="form-control my-2" type="date" name="birthDay" />
               <div className="form-control my-2">
                <input type="radio" name="gender" id="" value="Male" onChange={this.hendleChange} /> Male
                <input type="radio" name="gender" id="" value="Female" onChange={this.hendleChange} /> Female
                <input type="radio" name="gender" id="" value="Other" onChange={this.hendleChange} /> Other
                
               </div>
               <div>
                <input type="checkbox" name="skills" value="Java" id="" checked={skills.includes("Java")} onChange={this.hendleSkillChange} /> Java
                <input type="checkbox" name="skills" value="Javascript" id="" checked={skills.includes("Javascript")} onChange={this.hendleSkillChange} /> Javascript
                <input type="checkbox" name="skills" value="Python" id="" checked={skills.includes("Python")} onChange={this.hendleSkillChange} /> Python
                <input type="checkbox" name="skills" value="Golang" id="" checked={skills.includes("Golang")} onChange={this.hendleSkillChange} /> Golang
                <input type="checkbox" name="skills" value="C++" id="" checked={skills.includes("C++")} onChange={this.hendleSkillChange} /> C++
                <input type="checkbox" name="skills" value="Rube" id="" checked={skills.includes("Rube")} onChange={this.hendleSkillChange} /> Rube
               </div>
               <div>
                <input type="checkbox" name="agree" id="" checked={agree}  onChange={this.hendleChackBox} />
                I agger to all the terms & condition 
               </div>
               <button onClick={()=>console.log(this.state)}>Show Data</button>
            </div>
        )
    }
}
export default Inputs;