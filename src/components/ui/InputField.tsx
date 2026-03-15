"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputFieldProps = {
  label: string;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={clsx("flex flex-col gap-1", className)}>
        <label className="text-sm font-medium">{label}</label>

        <input ref={ref} {...props} className="border rounded p-2" />

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

InputField.displayName = "InputField";
