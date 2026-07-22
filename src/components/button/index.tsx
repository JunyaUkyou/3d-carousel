type Props = {
  onClick: () => void;
  text: string;
};

export const Button = ({ onClick, text }: Props) => {
  return (
    <button
      className="px-6 py-4  rounded-full bg-gray-800 hover:bg-gray-700"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
