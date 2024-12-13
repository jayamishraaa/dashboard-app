import { FC } from "react";

interface CardProps {
  heading: string;
  value: number;
}

const Card: FC<CardProps> = ({ heading, value }) => {
  return (
    <div className="card-component flex flex-col px-16 p-2 items-center ">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">{heading}</h2>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default Card;
