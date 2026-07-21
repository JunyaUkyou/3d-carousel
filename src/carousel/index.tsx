import { type ReactNode, useState } from "react";
import { tv } from "tailwind-variants";
import { Button } from "./button";
import { getNormalizedIndex } from "../utilities/getNormalizedIndex";

type Props<T> = {
  items: T[];
  isLeaving: boolean;
  renderItem: (data: T, isSelected: boolean) => ReactNode;
};

export const Carousel = <T,>({ items, renderItem, isLeaving }: Props<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;
  const angleStep = 360 / totalItems;
  const radius = 300;

  const prev = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const next = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const buttonStyle = tv({
    base: "mt-4 flex justify-between transition-opacity duration-700",
    variants: {
      isLeaving: {
        true: "opacity-0",
      },
    },
  });

  return (
    <div className="flex flex-col">
      <div className="relative w-80 h-96 flex items-center justify-center perspective-midrange">
        <div
          className="absolute w-full h-full transition-transform duration-700 transform-3d"
          style={{
            transform: `translateZ(-${radius}px) rotateY(${-currentIndex * angleStep}deg)`,
          }}
        >
          {items.map((item, index) => {
            const itemAngle = index * angleStep;
            const normalizedCurrentIndex = getNormalizedIndex(
              currentIndex,
              totalItems,
            );
            const isSelected = index === normalizedCurrentIndex;
            return (
              <div
                key={index}
                className={`absolute inset-0 backface-visible `}
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                }}
              >
                {renderItem(item, isSelected)}
              </div>
            );
          })}
        </div>
      </div>
      <div className={buttonStyle({ isLeaving })}>
        <Button onClick={prev} text={"← Prev"} />
        <Button onClick={next} text={"Next →"} />
      </div>
    </div>
  );
};
