import { tv } from "tailwind-variants";
import { Carousel } from "./carousel";
import { Card, type CardItem } from "./card";
import { usePageStatus } from "./hooks/usePageStatus";

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
  const { pageStatus, handlePageStatus } = usePageStatus();
  const isLeaving = pageStatus !== "idle";

  const onClick = (id: number, isActiveIndex: boolean) => {
    if (!isActiveIndex) return;
    handlePageStatus(id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className={titleStyle({ isLeaving })}>3D carousel</h1>
      <Carousel
        items={CAROUSEL_ITEMS}
        isLeaving={isLeaving}
        renderItem={(item, isActiveIndex) => {
          const isOtherItemSelected = isLeaving && !isActiveIndex;
          return (
            <Card
              item={item}
              isActiveIndex={isActiveIndex}
              pageStatus={pageStatus}
              isLeaving={isOtherItemSelected}
              onClick={() => onClick(item.id, isActiveIndex)}
            />
          );
        }}
      ></Carousel>
    </div>
  );
}

export default App;
