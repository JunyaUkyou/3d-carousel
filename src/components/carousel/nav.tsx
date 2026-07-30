import { memo } from "react";
import { SlideButton } from "./slideButton";
import { Marker } from "./marker";
import { useNormalizedCurrentIndex } from "../../hooks/useNormalizedCurrentIndex";

type Props = {
  prev: () => void;
  next: () => void;
  currentIndex: number;
  totalItems: number;
  moveIndex: (id: number) => void;
  isPlaying: boolean;
};

export const Nav = memo(
  ({ prev, next, currentIndex, totalItems, moveIndex, isPlaying }: Props) => {
    const markers = Array.from({ length: totalItems });
    const activeIndex = useNormalizedCurrentIndex(currentIndex, totalItems);

    return (
      <nav className="flex justify-between items-center">
        <SlideButton
          onClick={prev}
          text={"←"}
          isPlaying={isPlaying}
          aria-label="Prev Slide"
        />

        <ul className="flex gap-3">
          {markers.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <Marker
                key={index}
                index={index}
                totalItems={totalItems}
                isActive={isActive}
                isPlaying={isPlaying}
                onClick={moveIndex}
              />
            );
          })}
        </ul>

        <SlideButton
          onClick={next}
          text={"→"}
          isPlaying={isPlaying}
          aria-label="Next Slide"
        />
      </nav>
    );
  },
);

Nav.displayName = "Nav";
