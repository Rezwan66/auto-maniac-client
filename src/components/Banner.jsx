const Banner = () => {
  return (
    <div className="mt-4">
      <div
        className="hero h-[450px] bg-center rounded-md"
        style={{
          backgroundImage: 'url(/car-dashboard.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-40 rounded-md"></div>
        <div className="hero-content w-full text-neutral-content text-right justify-end">
          <div className="max-w-lg space-y-4 md:mr-4">
            <h1 className="text-5xl text-error font-bold">Drive the Future</h1>
            <i className="font-bold text-white">
              with Our Premier Automotive Brands
            </i>
            <br />
            <p>
              Experience the thrill of the open road with our elite selection of
              automotive brands. From classic craftsmanship to eco-friendly
              innovation, we have something for every car enthusiast. Start your
              journey today and discover the epitome of automotive excellence.
            </p>
            <button className="btn btn-error btn-outline capitalize">
              Ready, set, go!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
