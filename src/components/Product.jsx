const Product = ({product,handleAddClickProduct}) => {
    return ( 


        <>
            <div className=" border-2 rounded-lg  flex flex-col justify-center items-center my-4 p-4 mx-2">
            <h2 key={product.id}>title: {product.title}</h2>
            <img className="w-48" src={product.image} alt="" />
            <p>price: {product.price}</p>
            <button className="btn" onClick={()=>handleAddClickProduct(product.id)}>Add to bucket</button>
           
            </div>
        </>
     );
}
 
export default Product;