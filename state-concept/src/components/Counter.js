import React  from "react";
class EventBinding extends React.Component{
    constructor()
    {
        super();
        this.state={
            Inccounter:0,
            addCounter:2,
            Deccounter:20,

        }
    }
    increment(){
        this.setState({
            Inccounter:this.state.Inccounter+1,
            addCounter:this.state.Inccounter+2
        })
    }
    decrement()
    {this.setState({
        Deccounter:this.state.Deccounter-1
    })
        
    }
    render()
    {
        return(
            <div>
            <h3>Increment Counter :{this.state.Inccounter} </h3>
            <h3>Add Counter :{this.state.addCounter} </h3>
            <button onClick={()=>this.increment()}>Increment</button>
            <h3>Decremenet counter:{this.state.Deccounter} </h3>
            <button onClick={()=>this.decrement()}>Decremenet</button>
        </div>
        )
        
    }
}
export default EventBinding;