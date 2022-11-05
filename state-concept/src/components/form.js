import {Component} from "react";
class FormIn extends Component{
    state={
        FirstName:"",
        LastName:"" 
    }
     


    
    handleFnameChange=(event)=>{
        this.setState({
            FirstName:event.target.value
        })
    }
    handleLnameChange=(event)=>
    {
        this.setState({
            LastName:event.target.value
        })
    }
    handleSubmitChange=(event)=>
    { event.preventDefault()
        return <p>{this.state.FirstName} {this.state.LastName}</p>
    }
render()
 {
    return(
        <div> Form
            <form onSubmit={this.handleSubmitChange}>
                {/* {/* <input onChange={this.handleFnameChange}  type="text" value={this.state.FirstName}>FirstName</input> */}
                {/* <input onChange={this.handleLnameChange}  type="text" value={this.state.LastName}>LastName</input>  */}
              
                <input onChange={this.handleFnameChange}  type="text" value={this.state.FirstName}></input> 
                <input onChange={this.handleLnameChange}  type="text" value={this.state.LastName}></input>
                  <button onSubmit={this.handleSubmitChange}>Submit</button>
                  
            </form>
        </div>
    )
 }

}
export default FormIn