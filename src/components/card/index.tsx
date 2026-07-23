import { tv } from "tailwind-variants";

export type CardItem = {
  id: number;
  title: string;
  bgColor: string;
  imageUrl: string;
};

type Props = {
  item: CardItem;
  isActiveIndex: boolean;
  onClick?: () => void;
};

const cardStyle = tv({
  base: "w-full h-full transition-opacity duration-700 ",
  variants: {
    isActiveIndex: {
      true: "cursor-pointer",
      false: "cursor-default opacity-20",
    },
  },
});

export const Card = ({ item, isActiveIndex, onClick }: Props) => {
  return (
    <div
      className={`${cardStyle({ isActiveIndex })} ${item.bgColor}`}
      onClick={onClick}
    >
      <img
        src={item.imageUrl}
        className="w-full h-full object-cover object-center max-w-full max-h-full"
      />
      {/* <p>{item.id}</p>
      <p>{item.title}</p> */}
    </div>
  );
};
