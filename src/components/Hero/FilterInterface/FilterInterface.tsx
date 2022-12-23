import Filter from "./Filter";
import Info from "./Info";

const FilterInterface = () => {
  return (
    <div className="min-h-[25vh] w-[100vw] md:w-[90vw] absolute top-[35%]">
      <div className="bg-[#fff] flex flex-col gap-2 sm:gap-0 sm:grid grid-cols-3 min-h-[12.5vh] flex-grow place-items-center md:rounded-t-box p-2">
        <Filter tittle="Number of Rooms..." options={["Item 1", "Item 2"]} />
        <Filter tittle="Location..." options={["Item 1", "Item 2"]} />
        <Filter tittle="Price Range..." options={["Item 1", "Item 2"]} />
      </div>

      <div className="bg-primary min-h-[12.5vh] flex items-center justify-center tracking-wide md:rounded-b-box py-8">
        <Info
          h2={"Maximamise your mortgage option with tailored rates"}
          p={`Cray celiac consequat, gentrify ullamco biodiesel etsy you probablyhaven't heard of them!`}
        />
      </div>
    </div>
  );
};

export default FilterInterface;
