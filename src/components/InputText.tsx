function InputText({
  placeholder,
  label,
  name,
  handleChange
}: {
  placeholder: string;
  label: string;
  name?: string;
  handleChange?: (e: any) => void;
}) {
  return (
    <div className="input-text">
      <label className="label">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(e) => (handleChange ? handleChange(e.target) : null)}
      />
    </div>
  );
}

export default InputText;
