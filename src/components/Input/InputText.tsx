import React from 'react';

// import { Container } from './styles';

const InputText: React.FC<{ 
  placeholder?: string; 
  className?: string; 
  type?: string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
  defaultValue?: string; // Add defaultValue prop
}> = ({ placeholder, className, type, onChange, defaultValue }) => {
  return (
    <div className="mt-2">
      {type === 'area' ? (
        <textarea
          placeholder={placeholder}
          name="about"
          rows={3}
          className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${className}`}
          defaultValue={defaultValue} // Use defaultValue prop
          onChange={onChange}
        />
      ) : (
        <input
          name="first-name"
          type={type || "text"}
          autoComplete="given-name"
          className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${className}`}
          placeholder={placeholder}
          defaultValue={defaultValue} // Use defaultValue prop
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default InputText;