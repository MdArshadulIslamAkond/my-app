import React from 'react';

class App extends React.Component {
    /* constructor(props) {
        super(props);
        this.count = 5;
        this.state ={
            count : 0
        }
    } */
    state ={
        count : 0,
        lotofproperties:{}
    }
    count = 10;
    render() {
      return(
        <div className="App">
            <h1>Why do we  need state</h1>
            <h1>Count= {this.state.count}</h1>
            <button onClick={()=>{
                // this.count++;
                this.setState((prev)=>{
                    return{
                        count: prev.count +1
                    }
                },()=>{
                    console.log("Click...", this.state.count)
                });
               
            }}>Add+1</button>
        </div>
      )
    }
}
export default App;