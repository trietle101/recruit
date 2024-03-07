function Dropdown({
  options,
  label,
  placeholder
}: {
  options: Array<string>;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="drop-down">
      {label !== "" && <label className="label">{label}</label>}

      {/* <div className="drop-down_container">
        <p>{placeholder}</p>
        <img src="src/assets/icons/arrow.png" alt="arrow" />
      </div> */}
      <select className="drop-down_container" name="" id="">
        <option className="placeholder" hidden>
          {placeholder}
        </option>
        {options.map((opt, index) => {
          return <option key={index}>{opt}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
