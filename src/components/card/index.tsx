import { useEffect } from "react";
import { tv } from "tailwind-variants";
import { type CarouselItem, type EffectType } from "../../utilities/type";

type Props = {
  item: CarouselItem;
  isActiveIndex: boolean;
  onClick?: () => void;
  onEffect: (effectType: EffectType | undefined) => void;
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

export const Card = ({ item, isActiveIndex, onClick, onEffect }: Props) => {
  useEffect(() => {
    if (isActiveIndex) {
      onEffect(item.effectType);
    }
  }, [item, isActiveIndex, onEffect]);

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
