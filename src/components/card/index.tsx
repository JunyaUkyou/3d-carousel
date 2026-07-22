import { tv } from "tailwind-variants";
import { type PageStatus } from "../../hooks/usePageStatus";

export type CardItem = {
  id: number;
  title: string;
  bgColor: string;
};

type Props = {
  item: CardItem;
  isActiveIndex: boolean;
  isLeaving: boolean;
  pageStatus: PageStatus;
  onClick?: () => void;
};

const cardStyle = tv({
  base: "w-full h-full transition-opacity duration-700",
  variants: {
    isActiveIndex: {
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
  isActiveIndex,
  isLeaving = false,
  onClick,
}: Props) => {
  return (
    <div
      className={`${cardStyle({ isActiveIndex, isLeaving })} ${item.bgColor}`}
      onClick={onClick}
    >
      <p>{item.id}</p>
      <p>{item.title}</p>
    </div>
  );
};
