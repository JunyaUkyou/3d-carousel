import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  text: string;
};

export const SlideButton = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="px-6 py-4 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
    >
      {text}
    </button>
  );
};
