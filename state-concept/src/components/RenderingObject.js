function RenderingObject()
{
   const products=[
    {id:1,name:"Laptop",price:50000},
    {id:2,name:"TV",price:20000},
    {id:3,name:"Mobile",price:50000},
    {id:4,name:"Android",price:10000},
   ]
   const productlist=products.map((product)=>
<h1 key={product.id}>{product.name} : {product.price}</h1>
)
return <div>{productlist}</div> 
}

export default RenderingObject