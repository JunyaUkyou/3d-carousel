import { Button } from "../../components/button";

type Props = {
  prev: () => void;
  next: () => void;
};

export const Nav = ({ prev, next }: Props) => {
  return (
    <div className="mt-4 flex justify-between">
      <Button onClick={prev} text={"← Prev"} />
      <Button onClick={next} text={"Next →"} />
    </div>
  );
};
