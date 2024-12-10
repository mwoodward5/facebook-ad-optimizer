import React from "react";

interface CheckboxProps {
  label?: string; // Label for the checkbox
  checked: boolean; // Checkbox state
  onChange: (checked: boolean) => void; // Callback when the checkbox is toggled
  disabled?: boolean; // Disable the checkbox
  className?: string; // Additional custom classes
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <label
      className={`flex items-center space-x-4 cursor-pointer ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      } ${className}`}
    >
      <div
        className={`w-8 h-8 flex items-center justify-center border-2 rounded-lg ${
          checked ? "bg-primary border-primary" : " border-[#252525]"
        } transition-colors duration-200 ${
          disabled ? "bg-gray-200" : "hover:border-primary"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {label && <span className="">{label}</span>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="hidden"
      />
    </label>
  );
};

export default Checkbox;
