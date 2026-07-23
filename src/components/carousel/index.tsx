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
      <div className="relative w-56 h-64 md:w-80 md:h-96 [--carousel-radius:var(--radius-carousel-sm)]  md:[--carousel-radius:var(--radius-carousel-md)] flex items-center justify-center perspective-midrange">
        <div
          className="absolute w-full h-full transition-transform duration-700 transform-3d"
          style={{
            transform: `rotateX(-20deg) translateZ(calc(-1 * var(--carousel-radius))) rotateY(${-currentIndex * angleStep}deg)`,
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
                className={`absolute inset-0 backface-visible`}
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(var(--carousel-radius))`,
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
