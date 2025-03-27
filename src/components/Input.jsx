import { useState } from 'react';

export default function Input({ label, type = 'text', icon, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6 group">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700 transition-all duration-200 group-hover:text-gray-900">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
            {icon}
          </div>
        )}
        <div className="relative">
          <input
            type={type}
            className={`w-full py-2 bg-transparent border-0 border-b-2 ${
              isFocused 
                ? 'border-blue-500' 
                : 'border-gray-300 hover:border-gray-400'
            } focus:outline-none focus:ring-0 transition-all duration-300 ${
              icon ? 'pl-10' : 'pl-0'
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          <div 
            className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
              isFocused ? 'w-full' : 'w-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
}