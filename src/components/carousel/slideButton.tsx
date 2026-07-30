import { type ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  text: string;
  isPlaying: boolean;
};

const style = tv({
  base: "px-6 py-4 rounded-full bg-gray-800 hover:bg-gray-700",
  variants: {
    isPlaying: {
      true: "pointer-events-none opacity-0",
      false: "pointer-events-auto cursor-pointer opacity-100",
    },
  },
});

export const SlideButton = ({ text, isPlaying, ...props }: ButtonProps) => {
  return (
    <button {...props} className={style({ isPlaying })}>
      {text}
    </button>
  );
};
