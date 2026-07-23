import { Carousel } from "../../components/carousel";
import { Card, type CardItem } from "../../components/card";

const CAROUSEL_ITEMS: CardItem[] = [
  { id: 1, title: "Item 1", bgColor: "bg-red-500", imageUrl: "/items/7.webp" },
  { id: 2, title: "Item 2", bgColor: "bg-blue-500", imageUrl: "/items/8.webp" },
  {
    id: 3,
    title: "Item 3",
    bgColor: "bg-green-500",
    imageUrl: "/items/3.webp",
  },
  {
    id: 4,
    title: "Item 4",
    bgColor: "bg-yellow-500",
    imageUrl: "/items/4.webp",
  },
  {
    id: 5,
    title: "Item 5",
    bgColor: "bg-purple-500",
    imageUrl: "/items/5.webp",
  },
  { id: 6, title: "Item 6", bgColor: "bg-pink-500", imageUrl: "/items/6.webp" },
];

export const Home = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">3D Carousel</h1>

      <Carousel
        items={CAROUSEL_ITEMS}
        renderItem={(item, isActiveIndex) => {
          return <Card item={item} isActiveIndex={isActiveIndex} />;
        }}
      ></Carousel>
    </div>
  );
};
