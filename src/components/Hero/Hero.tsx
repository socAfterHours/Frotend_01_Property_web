import FilterInterface from "./FilterInterface/FilterInterface";

const Hero = () => {
  return (
    <div className="min-h-[60vh] ">
      <div
        className="hero min-h-[35vh]"
        style={{
          backgroundImage: `url("https://placeimg.com/1000/800/arch?t=1671747113913")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center mb-10 text-neutral-content">
          <div className="max-w-[40rem] text-light">
            <p className="mb-5 text-sm font-bold opacity-75 tracking-[0.3rem]">
              <span className="mr-3">GO</span> EXPLORE
            </p>
            <h1 className="mb-1 text-3xl font-bold">
              Experience the excitement of house hunting
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center content-center ">
        <FilterInterface />
      </div>
    </div>
  );
};

export default Hero;
