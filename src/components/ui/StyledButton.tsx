import React from "react";
import clsx from "clsx";

type StyledButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export const StyledButton = ({
  children,
  disabled,
  className,
}: StyledButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full rounded bg-indigo-600 px-4 py-2 text-base text-white hover:bg-indigo-700 active:bg-indigo-800 sm:w-auto sm:px-12 sm:py-2 sm:text-md",
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
