function InputPassword({
  placeholder,
  label
}: {
  placeholder: string;
  label: string;
}) {
  return (
    <div className="input-password">
      <label className="label">{label}</label>
      <input type="password" name="position" placeholder={placeholder} />
    </div>
  );
}

export default InputPassword;
