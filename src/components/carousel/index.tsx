import {
  type ReactNode,
  type RefObject,
  useState,
  useImperativeHandle,
} from "react";
import { getNormalizedIndex } from "../../utilities/getNormalizedIndex";

export type CarouselRef = {
  next: () => void;
  prev: () => void;
};

type Props<T> = {
  ref: RefObject<CarouselRef | null>;
  items: T[];
  renderItem: (data: T, isSelected: boolean) => ReactNode;
};

export const Carousel = <T,>({ ref, items, renderItem }: Props<T>) => {
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

  useImperativeHandle(ref, () => ({
    next,
    prev,
  }));

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
            const isActiveIndex = index === normalizedCurrentIndex;
            return (
              <div
                key={index}
                className={`absolute inset-0 backface-visible `}
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                }}
              >
                {renderItem(item, isActiveIndex)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
