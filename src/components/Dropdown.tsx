function Dropdown({
  placeholder,
  label
}: {
  placeholder: string;
  label: string;
}) {
  return (
    <div className="drop-down">
      <label className="label">{label}</label>
      <div className="drop-down_container">
        <p>{placeholder}</p>
        <img src="src/assets/icons/arrow.png" alt="arrow" />
      </div>
    </div>
  );
}

export default Dropdown;
