// 負の数でも 0 〜 (totalItems - 1) の範囲に収める関数
export const getNormalizedIndex = (index: number, total: number) => {
  return ((index % total) + total) % total;
};
