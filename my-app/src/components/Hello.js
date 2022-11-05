import React from "react";

// const Hello= ()=><h1>Hello ES6</h1>

class Hello extends React.Component{
    render()
    {
        return <h1>Hello Class : {this.props.division}</h1>
    }
}

export default Hello;