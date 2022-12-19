type FilterProps = {
    options?: string[];
};


const Filter = (props: FilterProps) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
    >
      <div className="collapse-title text-xl font-medium">
        Click to expand
      </div>
      <div className="collapse-content">
        {props.options?.map((option) => (
            <ul className="list-none">
                <li className="text-base font-medium">
                    <a href="/">{option}</a>
                </li>
            </ul>
        ))}
      </div>
    </div>
  );
};

export default Filter;
