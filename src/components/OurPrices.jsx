const OurPrices = () => {
  return (
    <div className="my-10 py-6">
      <h2 className="text-4xl font-semibold text-error text-center mb-2">
        Choose Our Affordable Plans
      </h2>
      <p className="text-error text-center mb-10">
        <i>For a smoother experience in your automotive journey.</i>
      </p>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items-center container">
          <div className="py-12 bg-gray-200 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full z-30">
            <h1 className="text-gray-500 font-semibold text-xl ">Basic</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-gray-700 text-4xl font-black">$199.99</h1>
              <p className="text-gray-500  mt-2">Monthly</p>
            </div>
            <div className="h-px bg-gray-200"></div>
            <div className="text-center mt-3">
              <p className="text-sm text-gray-400">
                Get started with our Basic subscription for essential features
                and updates. Perfect for car enthusiasts looking for a reliable
                source of automotive news and reviews.
              </p>
            </div>
            <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
              Buy Now
            </button>
          </div>
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-orange-500 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
            <h1 className="text-orange-200 font-semibold text-xl ">Pro</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-white text-4xl font-black">$399.99</h1>
              <p className="text-white text-opacity-50 mt-2">Monthly</p>
            </div>
            <div className="h-px bg-orange-400"></div>
            <div className="text-center mt-3">
              <p className="text-sm text-white text-opacity-80">
                Upgrade to our Pro subscription for an enhanced automotive
                experience. Access exclusive content, in-depth reviews, and
                early access to the latest industry trends.
              </p>
            </div>
            <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-orange-400 hover:shadow-xl duration-200 hover:bg-orange-800">
              Buy Now
            </button>
          </div>
          <div className="py-12 bg-gray-200 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full z-30">
            <h1 className="text-gray-500 font-semibold text-xl ">Enterprise</h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-gray-700 text-4xl font-black">$899.00</h1>
              <p className="text-gray-500  mt-2">Monthly</p>
            </div>
            <div className="h-px bg-gray-200"></div>
            <div className="text-center mt-3">
              <p className="text-sm text-gray-400">
                Take your automotive journey to the next level with our
                Enterprise subscription. Gain access to premium content, VIP
                events, and personalized expert advice. Your key to the
                automotive elite.
              </p>
            </div>
            <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrices;
