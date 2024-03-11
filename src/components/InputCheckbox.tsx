function InputCheckbox({ label, value }: { label: string; value: string }) {
  return (
    <div className="input-checkbox">
      <input type="checkbox" name="radio" id="radio" value={value} />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
}

export default InputCheckbox;
