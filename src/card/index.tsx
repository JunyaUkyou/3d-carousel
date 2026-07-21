import { tv } from "tailwind-variants";

export type CardItem = {
  id: number;
  title: string;
  bgColor: string;
};

type Props = {
  item: CardItem;
  isSelected: boolean;
  onClick?: () => void;
};

const cardStyle = tv({
  base: "w-full h-full transition-opacity duration-700",
  variants: {
    isSelected: {
      true: "cursor-pointer",
      false: "cursor-default opacity-50",
    },
  },
});

export const Card = ({ item, isSelected, onClick }: Props) => {
  return (
    <div
      className={`${cardStyle({ isSelected })} ${item.bgColor}`}
      onClick={onClick}
    >
      <p>{item.id}</p>
      <p>{item.title}</p>
    </div>
  );
};
