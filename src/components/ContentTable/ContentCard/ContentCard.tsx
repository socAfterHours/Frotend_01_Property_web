import {
  faBed,
  faHouse,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardProps = {
  picture?: string;
  type?: string;
  description: string;
  price: number;
  rooms: number;
  location: string;
};

const ContentCard = (props: CardProps) => {
  const { picture, type, price, rooms, location, description } = props;
  return (
    <div className="w-full py-4 sm:w-1/2 md:w-1/2 md:px-4 xl:w-1/3">
      <a
        href="/"
        className="block bg-[#FFF] shadow-md hover:shadow-xl overflow-hidden md:rounded-lg"
      >
        <div className="relative h-[25vh] overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={
              picture ||
              "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            }
            alt={`Beutifull ${type} in ${location}`}
          />
        </div>
        <div className="flex items-center justify-between min-h-[3rem] px-10 leading-none bg-primary text-orange-800 font-semibold uppercase tracking-wide text-xs">
          <p className="text-lg text-light font-bold">
            £{price.toLocaleString("en-US")}
          </p>
          <div className="flex items-center text-light font-bold">
            <FontAwesomeIcon icon={faBed} className="text-lg mr-2" />
            <p className="text-xl">{rooms}</p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex w-[80%] justify-around">
            <div className="flex items-center mt-2 mb-2 ">
              <FontAwesomeIcon
                icon={faHouse}
                className="text-xl mr-2 text-secondary"
              />
              <h2 className=" font-bold">House</h2>
            </div>
            <div className="flex items-center mt-2 mb-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-xl mr-2 text-secondary"
              />
              <h2 className="font-bold">Location</h2>
            </div>
          </div>

          <div className="mt-3 flex justify-center items-center px-5">
            <p className="text-md border-t text-justify">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContentCard;
