function InputDate({
  placeholder,
  label
}: {
  placeholder: string;
  label: string;
}) {
  return (
    <div className="input-date">
      <label className="label">{label}</label>
      <div className="input-date_container">
        <div className="left">
          <img src="assets/icons/Calendar.png" alt="Calendar" />
          <p>{placeholder}</p>
        </div>
        <img src="assets/icons/circle-xmark.png" alt="circle-xmark" />
      </div>
    </div>
  );
}

export default InputDate;
