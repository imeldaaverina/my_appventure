const Input = ({
    label,
    name,
    type,
    placeholder,
}) => {
    
    return (
        <label htmlFor={name} className="block w-full mb-3">
           <div className="font-bold mb-1">{label}</div>
           <input
           name={name}
           type={type}
           className="py-2 focus:ring-0 focus:outline-none border-b w-full"
           placeholder={placeholder}
           />
        </label>
    )
}

export default Input;