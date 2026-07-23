import { Carousel } from "../../components/carousel";
import { Card, type CardItem } from "../../components/card";

const CAROUSEL_ITEMS: CardItem[] = [
  { id: 1, title: "Item 1", bgColor: "bg-red-500" },
  { id: 2, title: "Item 2", bgColor: "bg-blue-500" },
  { id: 3, title: "Item 3", bgColor: "bg-green-500" },
  { id: 4, title: "Item 4", bgColor: "bg-yellow-500" },
  { id: 5, title: "Item 5", bgColor: "bg-purple-500" },
  { id: 6, title: "Item 6", bgColor: "bg-pink-500" },
];

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-24">3D Carousel</h1>
      <div className="flex flex-col">
        <Carousel
          items={CAROUSEL_ITEMS}
          renderItem={(item, isActiveIndex) => {
            return <Card item={item} isActiveIndex={isActiveIndex} />;
          }}
        ></Carousel>
      </div>
    </div>
  );
};
