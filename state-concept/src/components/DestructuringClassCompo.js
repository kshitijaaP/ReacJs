import React from "react"
class DestructuringClassCompo extends React.Component{
    render() {
        const{name,lastName} =this.props
        return (
             <h3>Name:{name}{lastName}</h3>
        );
    }

}

export default DestructuringClassCompo