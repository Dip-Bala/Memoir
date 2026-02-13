"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

type InputProps = {
  id?: string
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function Input({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled
}: InputProps) {
  const [showPassword, setShowPassword] = useState<true | false>(false);
  const isPasswordField = type === "password";

  return (
    <div className="flex flex-col gap-2" >
      <label htmlFor={id} className="text-sm font-medium text-text">{label}</label>
      <div className={`
    flex items-center
    bg-surface
    border border-border
    rounded-lg
    focus-within:border-accent
  `}>
      <input
        id={id}
        type={isPasswordField && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
      flex-1
      bg-transparent
      p-3
      text-sm
      outline-none
    "
        disabled={disabled}
      />
      {
        isPasswordField && (
          <button
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
          className="p-2 text-text-secondary"

          >
            {showPassword? <EyeClosed strokeWidth={1.5}/>
            : 
            <Eye strokeWidth={1.5}/>}

          </button>
        )
      }
      </div>

    </div>
  );
}
