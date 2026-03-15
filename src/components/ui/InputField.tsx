"use client";

import { forwardRef, InputHTMLAttributes } from "react";

type InputFieldProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">{label}</label>

        <input ref={ref} {...props} className="border rounded p-2" />

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

InputField.displayName = "InputField";
