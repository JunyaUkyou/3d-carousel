import { tv } from "tailwind-variants";

const titleStyle = tv({
  base: "text-2xl font-bold mb-4 transition-opacity duration-700",
  variants: {
    hideCarousel: {
      true: "opacity-0",
    },
  },
});

type Props = {
  text: string;
  hideCarousel: boolean;
};

export const Title = ({ text, hideCarousel }: Props) => {
  return <h1 className={titleStyle({ hideCarousel })}>{text}</h1>;
};
