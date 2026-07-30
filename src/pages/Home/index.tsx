import { useState, useCallback } from "react";
import { Carousel } from "../../components/carousel";
import { Card } from "../../components/card";
import { RainEffect } from "../../components/RainEffect";
import { SnowEffect } from "../../components/snowEffect";
import {
  type CarouselItem,
  type EffectType,
  effectTypes,
} from "../../utilities/type";

const CAROUSEL_ITEMS: CarouselItem[] = [
  { id: 1, title: "Item 1", bgColor: "bg-red-500", imageUrl: "/items/10.webp" },
  {
    id: 2,
    title: "Item 2",
    bgColor: "bg-blue-500",
    imageUrl: "/items/9.webp",
    effectType: effectTypes.RAIN,
  },
  {
    id: 3,
    title: "Item 3",
    bgColor: "bg-green-500",
    imageUrl: "/items/11.webp",
  },
  {
    id: 4,
    title: "Item 4",
    bgColor: "bg-yellow-500",
    imageUrl: "/items/12.webp",
    effectType: effectTypes.SNOW,
  },
  {
    id: 5,
    title: "Item 5",
    bgColor: "bg-purple-500",
    imageUrl: "/items/13.webp",
  },
  {
    id: 6,
    title: "Item 6",
    bgColor: "bg-pink-500",
    imageUrl: "/items/14.webp",
  },
];

export const Home = () => {
  const [effect, setEffect] = useState<EffectType | undefined>(undefined);

  const onEffect = useCallback((effect: EffectType | undefined) => {
    setEffect(effect);
  }, []);

  return (
    <div className="relative  bg-gray-900 text-white">
      <RainEffect isDisplay={effect === effectTypes.RAIN} />
      <SnowEffect isDisplay={effect === effectTypes.SNOW} />
      <h1 className="text-2xl font-bold fixed left-2 top-2">3D Carousel</h1>

      <div className="relative flex flex-col gap-6 items-center justify-center min-h-screen">
        <Carousel
          items={CAROUSEL_ITEMS}
          renderItem={(item, isActiveIndex) => {
            return (
              <Card
                item={item}
                isActiveIndex={isActiveIndex}
                onEffect={onEffect}
              />
            );
          }}
        ></Carousel>
      </div>
    </div>
  );
};
