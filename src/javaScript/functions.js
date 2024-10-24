function addToCart(id){
   const storedCart=localStorage.getItem('cart');
   const CartArray=storedCart?JSON.parse(storedCart):[];
   CartArray.push(id);
   JSON.stringify(CartArray)
   localStorage.setItem('cart', JSON.stringify(CartArray));
   
}
export {addToCart}
