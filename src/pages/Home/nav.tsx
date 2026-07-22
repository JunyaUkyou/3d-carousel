import { tv } from "tailwind-variants";
import { Button } from "../../components/button";

type Props = {
  hideCarousel: boolean;
  prev: () => void;
  next: () => void;
};

const buttonStyle = tv({
  base: "mt-4 flex justify-between transition-opacity duration-700",
  variants: {
    hideCarousel: {
      true: "opacity-0",
    },
  },
});

export const Nav = ({ hideCarousel, prev, next }: Props) => {
  return (
    <div className={buttonStyle({ hideCarousel })}>
      <Button onClick={prev} text={"← Prev"} />
      <Button onClick={next} text={"Next →"} />
    </div>
  );
};
