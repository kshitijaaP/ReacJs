import React  from "react";
class EventBindingClass extends React.Component{
    // constructor()
    // {
    //     super();
    //     this.state={
    //         Inccounter:0
    //     }
    //     // this.increment=this.increment.bind(this);//Way 1:Even Binding
    // }
    state={
        Inccounter:0
    }
    increment=()=> //Way 2:Even Binding
    {
        this.setState({
            Inccounter:this.state.Inccounter+1
     })
    }
render()
    {
        return(
            <div>
            <h3>Increment Counter :{this.state.Inccounter} </h3>
            <button onClick={()=>this.increment()}>Increment</button>
            {/* <button onClick={this.increment}>Increment</button> */}
            </div>
        )
        
    }
}
export default EventBindingClass;