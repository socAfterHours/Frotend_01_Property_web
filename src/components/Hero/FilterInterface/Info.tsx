import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

import ButtonPrimary from "../../utilities/ButtonPrimary";

type InfoProps = {
  h2: string;
  p: string;
};

const Info = (props: InfoProps) => {
  const { h2, p } = props;
  return (
    <div className="flex w-[95%] flex-col gap-5 md:flex-row md:gap-2 items-center justify-between md:w-[90%]">
      <div className="max-w-full gap=2 md:max-w-[80%]">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faKey} />
          <h2 className="text-lg md:text-2xl text-light">
           {h2}
          </h2>
        </div>
        <p className="text-sm md:text-base text-light mt-3 opacity-90">
          {p}
        </p>
      </div>

      <ButtonPrimary text="Calculate Now!" className={"border-light text-[#FFF] hover:text-primary hover:bg-light"}/>
    </div>
  );
};

export default Info;
