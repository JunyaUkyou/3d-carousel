import { useState } from "react";
import { tv } from "tailwind-variants";
import { Carousel } from "./carousel";
import { Card, type CardItem } from "./card";
import { useNavigate } from "react-router";

const CAROUSEL_ITEMS: CardItem[] = [
  { id: 1, title: "Item 1", bgColor: "bg-red-500" },
  { id: 2, title: "Item 2", bgColor: "bg-blue-500" },
  { id: 3, title: "Item 3", bgColor: "bg-green-500" },
  { id: 4, title: "Item 4", bgColor: "bg-yellow-500" },
  { id: 5, title: "Item 5", bgColor: "bg-purple-500" },
  { id: 6, title: "Item 6", bgColor: "bg-pink-500" },
];

const titleStyle = tv({
  base: "text-2xl font-bold mb-4 transition-opacity duration-700",
  variants: {
    isLeaving: {
      true: "opacity-0",
    },
  },
});

function App() {
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();

  const onClick = (id: number, isSelected: boolean) => {
    if (!isSelected) return;
    setIsLeaving(true);
    console.log(id);
    // navigate(`/details/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className={titleStyle({ isLeaving })}>3D carousel</h1>
      <Carousel
        items={CAROUSEL_ITEMS}
        isLeaving={isLeaving}
        renderItem={(item, isSelected) => {
          const isOtherItemSelected = isLeaving && !isSelected;
          return (
            <Card
              item={item}
              isSelected={isSelected}
              isLeaving={isOtherItemSelected}
              onClick={() => onClick(item.id, isSelected)}
            />
          );
        }}
      ></Carousel>
    </div>
  );
}

export default App;
