import { useState } from "react";

export const pageStatus = {
  idle: "idle",
  selected: "selected",
  animating: "animating",
  completed: "completed",
} as const;

export type PageStatus = keyof typeof pageStatus;

export function usePageStatus() {
  const [pageStatus, setPageStatus] = useState<PageStatus>("idle");

  // カード選択時のストーリー（シーケンス制御）
  const handlePageStatus = (id: number) => {
    // Step 1: 選択された（他が消え始める）
    setPageStatus("selected");
    console.log(`selected`);

    // Step 2: 700ms後（他のカードが消えた後）、選択カードを拡大（ヒーロー化）
    setTimeout(() => {
      setPageStatus("animating");
      console.log(`animating`);
    }, 1700);

    // Step 3: さらに1000ms後、ページ遷移を実行
    setTimeout(() => {
      setPageStatus("completed");
      console.log(`Navigate to /details/${id}`);
      // navigate(`/details/${item.id}`);
    }, 2300);
  };

  return {
    pageStatus,
    handlePageStatus,
  };
}
