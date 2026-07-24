export const effectTypes = {
  RAIN: "RAIN",
  SNOW: "SNOW",
} as const;

export type EffectType = keyof typeof effectTypes;

export type CarouselItem = {
  id: number;
  title: string;
  bgColor: string;
  imageUrl: string;
  effectType?: EffectType;
};
