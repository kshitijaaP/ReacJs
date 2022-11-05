import React from "react";
class EveHandClass extends React.Component{
    clickMe() {
        console.log("Button is clicked")
    }
    render()
    {
        return(
            <div>
                <h3>Class Component</h3>
                <button onClick={this.clickMe}>Click me</button>
            </div>
        )
    }
}
export default EveHandClass;