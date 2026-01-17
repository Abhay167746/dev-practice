

const ProductList = () => {
  const products=[
    {id:1, name:"Phone", price:"$699"},
     {id:2, name:"Laptop", price:"$900"},
      {id:3, name:"Tab", price:"$500"},

  ]
  return (
    <div>
      {products.map(product=>(
        <div key={product.id}>
          <h2>Name:{product.name}</h2>
          <h2>Price:{product.price}</h2>
        </div>
      ))}
    </div>
  )
}

export default ProductList

