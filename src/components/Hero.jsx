import { useEffect, useState } from "react";

const Hero = () => {
  const [phones, setPhones] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // .......................................
  const [mixes, setMix] = useState([]);
  const [currentIndex1, setCurrentIndex1] = useState(0);

  useEffect(() => {
    fetch("/assets/phones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phones.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [phones.length]);

  // ..............................
  useEffect(() => {
    fetch("public/mixed.json")
      .then((res) => res.json())
      .then((data) => setMix(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % phones.length);
    }, 3500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [phones.length]);

  return (
    <section className=" bg-[#f3f3f5]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-6 mt-12">
          <div className="md:col-span-2 flex flex-col md:flex-row justify-center items-center border-2 w-full h-fit rounded-[42px] px-4 py-4 border-yellow-200 bg-white transition-transform duration-200 hover:scale-95 ">
            {phones.length > 0 && (
              <div
                key={phones[currentIndex].id}
                className="w-full flex flex-col  md:flex-row justify-start gap-9 items-center transition-transform duration-200 hover:scale-95"
              >
                <img
                  src={phones[currentIndex].img}
                  alt={phones[currentIndex].name}
                  className="w-[300px] h-[400px] object-cover"
                />
                <div>
                  <h1 className="text-4xl  font-bold">
                    {phones[currentIndex].name}
                  </h1>
                  <h1 className="text-xl ">{phones[currentIndex].color}</h1>
                  <button className="btn bg-black text-white mt-6 hover:bg-white hover:broder-2 hover:border-black hover:text-black ">
                    View more
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="relative w-full h-full rounded-[42px] cursor-pointer bg-white ">
            <img
              src="public/assets/watches-removebg-preview.png"
              alt="Dark Vibe Watch"
              className="w-full h-auto object-cover filter brightness-90 contrast-150"
            />
            {/* Optional overlay for enhanced dark vibe */}
            <div className="absolute inset-0 bg-black opacity-35 rounded-[42px]"></div>
            <h1 className="text-2xl text-white font-bold absolute inset-9">
              Track your Time
            </h1>
          </div>
          <div className="flex justify-center items-center border-2 border-gray-700 rounded-[42px] bg-white  ">
            <div>
              <h1 className="text-xl">
                <span className="text-2xl font-bold">Winter is</span>
                <br></br> Coming!
                <i className="px-3 fas fa-snowflake text-sky-500"></i>
              </h1>
              <button className="btn bg-black text-white mt-6 hover:bg-white hover:broder-2 hover:border-black hover:text-black ">
                View more
              </button>
            </div>
            <img
              className="w-[180px] h-[180px] bg-cover"
              src="public\assets\Polo-Ralph-bento-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-6 mt-12">
          <div className="relative w-full h-full rounded-[42px] cursor-pointer bg-white ">
            <img
              src="public/assets/watches-removebg-preview.png"
              alt="Dark Vibe Watch"
              className="w-full h-auto object-cover filter brightness-90 contrast-150"
            />
            {/* Optional overlay for enhanced dark vibe */}
            <div className="absolute inset-0 bg-black opacity-35 rounded-[42px]"></div>
            <h1 className="text-2xl text-white font-bold absolute inset-9">
              Track your Time
            </h1>
          </div>
          <div className="flex justify-center items-center border-2 border-gray-700 rounded-[42px] bg-white  ">
            <div>
              <h1 className="text-xl">
                <span className="text-2xl font-bold">Winter is</span>
                <br></br> Coming!
                <i className="px-3 fas fa-snowflake text-sky-500"></i>
              </h1>
              <button className="btn bg-black text-white mt-6 hover:bg-white hover:broder-2 hover:border-black hover:text-black ">
                View more
              </button>
            </div>
            <img
              className="w-[180px] h-[180px] bg-cover"
              src="public\assets\Polo-Ralph-bento-removebg-preview.png"
              alt=""
            />
          </div>

          {/* extra */}
          <div className=" md:col-span-2 flex flex-col md:flex-row justify-center items-center border-2 w-full h-fit rounded-[42px] px-4 py-4 border-yellow-200 bg-white ">
            {mixes.length > 0 && (
              <div
                key={mixes[currentIndex1].id}
                className="w-full flex flex-col  md:flex-row justify-start gap-9 items-center transition-transform duration-200 hover:scale-95"
              >
                <img
                  src={mixes[currentIndex1].img}
                  alt={mixes[currentIndex1].name}
                  className="w-[300px] h-[400px] object-cover"
                />
                <div>
                  <h1 className="text-4xl  font-bold">
                    {mixes[currentIndex1].name}
                  </h1>
                  <h1 className="text-xl text-gray-500 ">
                    {mixes[currentIndex1].discription}
                  </h1>
                  <button className="btn bg-black text-white mt-6 hover:bg-white hover:broder-2 hover:border-black hover:text-black ">
                    View more
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
