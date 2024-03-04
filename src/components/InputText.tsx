function InputText({
  placeholder,
  label
}: {
  placeholder: string;
  label: string;
}) {
  return (
    <div className="input-text">
      <label className="label">{label}</label>
      <input type="text" name="position" placeholder={placeholder} />
    </div>
  );
}

export default InputText;
