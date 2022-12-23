import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="min-h-[50vh]">
      <div
        className="hero min-h-[35vh]"
        style={{
          backgroundImage: `url("https://placeimg.com/1000/800/arch?t=1671747113913")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center mb-10 text-neutral-content">
          <div className="max-w-[40rem] text-[#EAEEF3]">
            <p className="mb-5 text-sm font-bold opacity-75 tracking-[0.3rem]">
              <span className="mr-3">GO</span> EXPLORE
            </p>
            <h1 className="mb-1 text-3xl font-bold">
              Experience the excitement of house hunting
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center content-center">
        <div className="min-h-[25vh] w-[100vw] md:w-[90vw] absolute top-[35%]">
          <div className="bg-[#fff] flex flex-col gap-2 sm:gap-0 sm:grid grid-cols-3 min-h-[12.5vh] flex-grow place-items-center md:rounded-t-box p-2">
            <div
              tabIndex={0}
              className="dropdown w-[90%] collapse-arrow bg-[#F2F2F2] text-[#596C75] rounded-lg hover:cursor-pointer"
            >
              <p className="collapse-title text-base font-sm md:text-[0.93rem] lg:text-1xl lg:font-medium">
                Number of Rooms...
              </p>
              <ul
                tabIndex={0}
                className="dropdown-content menu mt-2 p-1 shadow  bg-[#596C75] text-[#F2F2F2] rounded-md w-[100%]"
              >
                <li>
                  <a href="/">Item 1</a>
                </li>
                <li>
                  <a href="/">Item 2</a>
                </li>
              </ul>
            </div>

            <div
              tabIndex={0}
              className="dropdown w-[90%] collapse-arrow bg-[#F2F2F2] text-[#596C75] rounded-lg hover:cursor-pointer"
            >
              <p className="collapse-title text-base font-sm md:text-[0.93rem] lg:text-1xl lg:font-medium">
                Location...
              </p>
              <ul
                tabIndex={0}
                className="dropdown-content menu mt-2 p-1 shadow  bg-[#596C75] text-[#F2F2F2] rounded-md w-[100%]"
              >
                <li>
                  <a href="/">Item 1</a>
                </li>
                <li>
                  <a href="/">Item 2</a>
                </li>
              </ul>
            </div>

            <div
              tabIndex={0}
              className="dropdown w-[90%] collapse-arrow bg-[#F2F2F2] text-[#596C75] rounded-lg hover:cursor-pointer"
            >
              <p className="collapse-title text-base font-sm md:text-[0.93rem] lg:text-1xl lg:font-medium">
                Price Range...
              </p>
              <ul
                tabIndex={0}
                className="dropdown-content menu mt-2 p-1 shadow  bg-[#596C75] text-[#F2F2F2] rounded-md w-[100%]"
              >
                <li>
                  <a href="/">Item 1</a>
                </li>
                <li>
                  <a href="/">Item 2</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#03628C] min-h-[12.5vh] flex items-center justify-center tracking-wide md:rounded-b-box py-8">

            <div className="flex w-[95%] flex-col gap-5 md:flex-row md:gap-2 items-center justify-between md:w-[90%]">

            <div className="max-w-full gap=2 md:max-w-[80%]">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faKey} />
                <h2 className="text-lg md:text-2xl text-[#EAEEF3]">Maximamise your mortgage option with tailored rates</h2>
              </div>
              <p className="text-sm md:text-base text-[#EAEEF3] mt-3 opacity-90">
                Cray celiac consequat, gentrify ullamco biodiesel etsy you
                probably haven't heard of them!
              </p>
            </div>

            <button className="btn btn-outline border-[#EAEEF3] text-[#FFF] hover:text-[#03628C] hover:bg-[#EAEEF3] hover:font-bold px-10">Calulate Now</button>
            </div>
            
           

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
