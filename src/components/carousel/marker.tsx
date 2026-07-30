import { tv } from "tailwind-variants";

const markerStyle = tv({
  base: "w-2 h-2 sm:w-4 sm:h-4 rounded-full border-red-100 bg-blue-100 cursor-pointer transition-opacity duration-700",
  variants: {
    isActive: {
      true: "opacity-100",
      false: "opacity-20",
    },
    isPlaying: {
      true: "pointer-events-none opacity-0",
      false: "pointer-events-auto",
    },
  },
});

type Props = {
  index: number;
  totalItems: number;
  isActive: boolean;
  isPlaying: boolean;
  onClick: (id: number) => void;
};

export const Marker = ({
  index,
  totalItems,
  isActive,
  isPlaying,
  onClick,
}: Props) => {
  return (
    <li>
      <button
        type="button"
        className={markerStyle({ isActive, isPlaying })}
        role="tab"
        aria-selected={isActive}
        aria-label={`Slide ${index + 1} / ${totalItems}`}
        onClick={() => onClick(index)}
        tabIndex={isActive ? -1 : 0}
      />
    </li>
  );
};
