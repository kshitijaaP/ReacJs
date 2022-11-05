import React  from "react";
class Counter extends React.Component{
    constructor()
    {
        super();
        this.state={
            Inccounter:0
           

        }
    }
    increment(){
        this.setState({
            Inccounter:this.state.Inccounter+1
          
        })
    }
   
    render()
    {
        return(
            <div>
            <h3>Increment Counter :{this.state.Inccounter} </h3>
           
            {/* <button onClick={()=>this.increment()}>Increment</button> */}
            <button onClick={this.increment}>Increment</button>
           
        </div>
        )
        
    }
}
export default Counter;