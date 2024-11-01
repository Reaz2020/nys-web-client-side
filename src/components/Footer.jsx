const Footer = () => {
  return (
    <section className="bg-[#0b051d] mt-12 mb-12">
      <div className="container w-full border-2 border-red-600">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-white text-center">
            Subscrib to our newsletter
          </h1>
          <p className="text-center text-gray-200 mt-4">
            We are here to serve you the beast deals,trends,products-makeing
            sure you <br></br> never miss a thing.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 text-gray-700 mt-4 bg-white focus:outline-none rounded-full shadow-md w-80"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Footer ;
