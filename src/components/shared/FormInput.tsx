"use client";

import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  textarea = false,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={name} className='block mb-2 font-semibold'>
        {label}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='w-full p-3 rounded-lg bg-transparent border border-my-gray/40 focus:border-my-orange outline-none resize-none'
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='w-full p-3 rounded-lg  border-b border-my-gray/40 focus:border-my-orange outline-none'
        />
      )}
    </div>
  );
}
