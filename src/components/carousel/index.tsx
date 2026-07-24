import { type ReactNode, useState, useCallback } from "react";
import { Nav } from "./nav";
import { useNormalizedCurrentIndex } from "../../hooks/useNormalizedCurrentIndex";

type Props<T extends { id: number }> = {
  items: T[];
  renderItem: (data: T, isSelected: boolean) => ReactNode;
};

export const Carousel = <T extends { id: number }>({
  items,
  renderItem,
}: Props<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;
  const angleStep = 360 / totalItems;

  const prev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const moveIndex = useCallback((id: number) => {
    setCurrentIndex(id);
  }, []);

  const normalizedCurrentIndex = useNormalizedCurrentIndex(
    currentIndex,
    totalItems,
  );

  return (
    <div className="flex flex-col w-full gap-6 justify-center items-center ">
      <div className="relative w-70 h-42.5 sm:w-110 sm:h-64 md:w-140 md:h-87.5 [--carousel-radius:var(--radius-carousel)] sm:[--carousel-radius:var(--radius-carousel-sm)] md:[--carousel-radius:var(--radius-carousel-md)] flex items-center justify-center perspective-midrange">
        <div
          className="absolute w-full h-full transform-3d"
          style={{
            transform: `translateZ(calc(-1 * var(--carousel-radius)))`,
          }}
        >
          <div
            className="absolute w-full h-full transition-transform duration-700 transform-3d"
            style={{
              transform: `rotateY(${-currentIndex * angleStep}deg)`,
            }}
          >
            {items.map((item, index) => {
              const itemAngle = index * angleStep;
              const isActiveIndex = index === normalizedCurrentIndex;
              return (
                <div
                  key={item.id}
                  className="absolute inset-0 backface-visible"
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
      <div className="w-70 h-42.5 sm:w-110 sm:h-64 md:w-140">
        <Nav
          prev={prev}
          next={next}
          currentIndex={currentIndex}
          totalItems={totalItems}
          moveIndex={moveIndex}
        />
      </div>
    </div>
  );
};
