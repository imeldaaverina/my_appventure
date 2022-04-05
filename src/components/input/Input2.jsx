import {EyeIcon, EyeOffIcon} from "@heroicons/react/outline";
import { useState } from "react";

const Input2 = ({ label, name, type, onChange, onBlur, placeholder, dataTestId }) => {
  // Input Password Component
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
    <EyeOffIcon className="h-5 w-5 text-black" onClick={togglePassword}/>

  };

  return (
    <label htmlFor={name} className="block w-full mb--3">
      <div className="font-normal text-sm mb-1">{label}</div>
        <div className="rounded-lg flex justify-between items-center bg-white pr-4 border focus:bg-white focus:outline-[#2196F3] w-full">
          <input 
            type={passwordShown ? "text" : "password"}  
            name={name} 
            className="py-2 focus:ring-0 focus:outline-none border-b text-black text-sm w-full p-4 rounded-lg" 
            placeholder={placeholder} 
            onChange={onChange} 
            onBlur={onBlur} 
            data-testid={dataTestId} 
          />
          <EyeIcon className="h-5 w-5 text-black" onClick={togglePassword}/>
      </div>
     
      
    </label>
    
  );
};

export default Input2;


