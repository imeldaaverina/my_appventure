const Input = ({ label, name, type, onChange, onBlur, placeholder, dataTestId }) => {
  return (
    <label htmlFor={name} className="block w-full mb-3">
      <div className="font-bold mb-1">{label}</div>
      <input 
      type={type} 
      name={name} 
      className="py-2 focus:ring-0 focus:outline-none border-b w-full" 
      placeholder={placeholder} 
      onChange={onChange} 
      onBlur={onBlur} 
      data-testid={dataTestId} 
      />
    </label>
  );
};

export default Input;
