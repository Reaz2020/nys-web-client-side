function Product_selection() {
  return (
    <section>
      <div className="container mx-auto h-16 w-full mt-12 mb-12">
        <ul className="flex flex-row justify-around w-full cursor-pointer ">
          <li className="flex flex-col justify-center items-center transition-transform duration-200 hover:scale-110">
            <i class="fa-solid fa-house"></i>
            <p>Home</p>
          </li>
          <li className="flex flex-col justify-center items-center transition-transform duration-200 hover:scale-110">
            <i class="fa-solid fa-percent"></i>
            <p>Special Offers</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110">
            <i class="fas fa-tshirt font-bold text-black"></i>
            <p>Clothing</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110">
            <i class="fa-solid fa-baby-carriage font-bold text-black"></i>
            <p>Baby Section</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110">
            <i class="fa-solid fa-mobile-button"></i>
            <p>Phones</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110">
            <i class="fa-solid fa-plug"></i>
            <p>Electronics</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110">
            <i class="fa-solid fa-teddy-bear"></i>
            <p>Toys</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110">
            <i class="fas fa-spa"></i>
            <p>Skin Care Products</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110">
            <i class="fa-solid fa-volleyball"></i>
            <p>Sports</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110">
            <i class="fa-solid fa-gamepad"></i>
            <p>Gamming</p>
          </li>
          <li className="flex flex-col justify-center items-center cursor-pointer transition-transform duration-200 hover:scale-110">
            <i class="fa-solid fa-desktop"></i>
            <p>Pc Componenets</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Product_selection;
