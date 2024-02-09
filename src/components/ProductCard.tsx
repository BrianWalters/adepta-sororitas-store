import {FunctionComponent} from "react";

interface ProductCardProps {
  id: string
  name: string
  image: string
}

export const ProductCard:FunctionComponent<ProductCardProps> = ({ name, id, image}) => {
  return (
    <div className="border rounded p-4">
      <a className="text-2xl" href={`/product/${id}`}>{name}</a>
      <p>{name}</p>
      <p><img src={image} alt=""/></p>
    </div>
  );
};
