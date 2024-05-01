import React from 'react';
import Buttons from './timer/button';

class App extends React.Component {
    state = {
        count:0
    };
    intervalId = null;
    incrementCount =()=>{
        this.setState({count: this.state.count +1});
    };
    decrementCount =()=>{
        if(this.state.count>0){
            this.setState({count: this.state.count -1});
        }
    };
    startTimer=()=>{
        if(this.state.count>0 && !this.intervalId){
        this.intervalId = setInterval(()=>{
           this.setState({count: this.state.count-1}, ()=>{
                    if(this.state.count===0){
                        alert("Timer Finished!!");
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                    }
                });

            }, 1000);
    }
};
stopTimer=()=>{
    if(this.intervalId){
        clearInterval(this.intervalId);
        this.intervalId = null;  
    }
}
resetTimer=()=>{
        this.setState({count:0});
        clearInterval(this.intervalId);
        this.intervalId = null;  
    
}

    render(){
       const {count} = this.state;
        return(
            <div className="App">
                <h1 className="heading">Simple Timer</h1>
                <div className="container">
                    <Buttons onClick ={this.decrementCount} name="-" />
                    <span className="Text">{count}</span>
                    <Buttons onClick ={this.incrementCount} name="+" />
                </div>
                <div className="container">
                <Buttons onClick ={this.startTimer} name="Start" />
                <Buttons onClick ={this.stopTimer} name="Stop" />
                <Buttons onClick ={this.resetTimer} name="Reset" />
                </div>
            </div>
        )
    }
}
export default App;