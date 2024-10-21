const Product = ({product}) => {
    return ( 


        <>
            <div className=" border-2 rounded-lg  flex flex-col justify-center items-center my-4 p-4 mx-2">
            <h2 key={product.id}>title: {product.title}</h2>
            <img className="w-48" src={product.image} alt="" />
            <p>price: {product.price}</p>
           
            </div>
        </>
     );
}
 
export default Product;