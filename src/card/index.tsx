import { tv } from "tailwind-variants";

export type CardItem = {
  id: number;
  title: string;
  bgColor: string;
};

type Props = {
  item: CardItem;
  isSelected: boolean;
  isLeaving?: boolean;
  onClick?: () => void;
};

const cardStyle = tv({
  base: "w-full h-full transition-opacity duration-700",
  variants: {
    isSelected: {
      true: "cursor-pointer",
      false: "cursor-default opacity-50",
    },
    isLeaving: {
      true: "opacity-0",
    },
  },
});

export const Card = ({
  item,
  isSelected,
  isLeaving = false,
  onClick,
}: Props) => {
  return (
    <div
      className={`${cardStyle({ isSelected, isLeaving })} ${item.bgColor}`}
      onClick={onClick}
    >
      <p>{item.id}</p>
      <p>{item.title}</p>
    </div>
  );
};
