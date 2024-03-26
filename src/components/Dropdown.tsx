function Dropdown({
  options,
  label,
  placeholder,
  handleChange
}: {
  options: Array<string>;
  label: string;
  placeholder: string;
  handleChange?: (e: any) => void;
}) {
  return (
    <div className="drop-down">
      {label !== "" && <label className="label">{label}</label>}

      {/* <div className="drop-down_container">
        <p>{placeholder}</p>
        <img src="assets/icons/arrow.png" alt="arrow" />
      </div> */}
      <select
        className="drop-down_container"
        name=""
        id=""
        onChange={(e) => (handleChange ? handleChange(e.target.value) : null)}
      >
        <option className="placeholder" hidden>
          {placeholder}
        </option>
        {options.map((opt, index) => {
          return (
            <option value={index} key={index}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
