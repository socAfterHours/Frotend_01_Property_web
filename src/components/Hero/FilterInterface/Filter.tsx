type FilterProps = {
  tittle: string;
  options: string[];
};

const Filter = (props: FilterProps) => {
  const { tittle, options } = props;

  return (
    <div
      tabIndex={0}
      className="dropdown w-[90%] collapse-arrow bg-light text-content-text rounded-lg hover:cursor-pointer"
    >
      <p className="collapse-title text-base font-sm md:text-[0.93rem] lg:text-1xl lg:font-medium">
        {tittle}
      </p>
      <ul
        tabIndex={0}
        className="dropdown-content menu mt-2 p-1 shadow  bg-content-text text-light font-medium rounded-md w-[100%]"
      >
        {options.map((option,key) => (
          <li key={key}>
            <a href="/">{option}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;

