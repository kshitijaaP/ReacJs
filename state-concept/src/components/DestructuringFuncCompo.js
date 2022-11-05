import React from "react"
function DestructuringFuncCompo(props)
{ 
    const {name,lastName}=props;
    return <h3>Name :{name} {lastName}</h3>
}
export default DestructuringFuncCompo;