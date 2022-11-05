function RenderingArray()
{
    const fruits=["Mango","Apple","Kiwi","Banana"];

    const fruitList=fruits.map((fruit,index)=>
    <h3 key={index}>{index} : {fruit}</h3>
    )
    return <div>{fruitList}</div>
}
export default  RenderingArray