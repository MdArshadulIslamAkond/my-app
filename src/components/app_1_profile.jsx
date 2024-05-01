import React from "react";
class Child extends React.Component {
    render() {
        this.props.func(this);
        return <h1>I am Child</h1>
    }
}
const ChildComponent =(props)=>(
<div>
    <h1>I am Child component</h1>
    <p>I don't no what to do</p>
    {probs.children}
</div>
)
class App extends React.Component {
    getContext(context){
        console.log(context);
    }
    render() {
        this.getContext(this);
        return(
            
            <div className ="App">
                <h1>Pass Function As Porps</h1>
                <Child func={this.getContext}/>
                <ChildComponent>
                    <h1>Hello, I am from Parent</h1>
                    <h4>I am child from Child Component</h4>
                </ChildComponent>
               {/*  <Profile />
                <Bio name="Test User" title="Test title" /> */}
                {/* <Myprops name = "Arshadul" /> */}
            </div>
        )
    }
}




/*const MyComponent = ()=> <h1>My Component</h1>

 class App extends React.Component {
    render() {
        /*
        // JSX representation
        return React.createElement("div",{className:"App"},[
            React.createElement("h1",null,"Hello react, you are awesome"),
            React.createElement("p",null,"what is JSX?") 
        ]) */
      /*   return (
            <div className="App">
                <h1>Hello react, you are awesome</h1>
                <p> what is JSX?</p>
            </div>
        ) */
       /*  const obj={
            title:"Test title",
            id : "myh1"
        }
        return (
            <React.Fragment className="App">
                <h1 {...obj}>Hello react, you are awesome</h1>
                <p> what is JSX?</p>
                <MyComponent />
            </React.Fragment>
        )
    } */


// function app(){
//     const name = "Md. Arshadul Islam Akond";
//     return <h1> I am {name}</h1>
// }
// export default app;
export default App;
/* 
//JSX  object representation
const element = {
    type:"div",
    props:{
        className:"App",
        children:[{type:"h1", props:{children:"Hello react, you are awesome"}},{type:"p", props:{children:"Whit is JSX?"}}]
    }
} */