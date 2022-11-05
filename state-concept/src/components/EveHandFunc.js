function EveHandFunc()
{
   function clickMe()
    {
       console.log("Buttom is Clicked")
    }
    return(
        <div>
            <h3>Functional Component</h3>
            <button onClick={clickMe}>Click me</button>
        </div>
    )
}
export default EveHandFunc;