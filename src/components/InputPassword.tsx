function InputPassword({
  placeholder,
  label,
  name,
  handleChange
}: {
  placeholder: string;
  label: string;
  name: string;
  handleChange?: (e: any) => void;
}) {
  return (
    <div className="input-password">
      <label className="label">{label}</label>
      <input
        type="password"
        name={name}
        placeholder={placeholder}
        onChange={(e) => (handleChange ? handleChange(e.target) : null)}
      />
    </div>
  );
}

export default InputPassword;
