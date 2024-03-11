function InputRadio({ label, value }: { label: string; value: string }) {
  return (
    <div className="input-radio">
      <input type="radio" name="radio" id="radio" value={value} />
      <label htmlFor="radio">{label}</label>
    </div>
  );
}

export default InputRadio;
