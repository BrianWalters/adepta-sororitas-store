import {FunctionComponent} from "react";

interface ProductCardProps {
  id: string
  name: string
  image: string
  price: string
}

export const ProductCard:FunctionComponent<ProductCardProps> = ({ name, id, image, price}) => {
  return (
    <div className="border rounded p-4">
      <p className="mb-2">
        <a className="text-3xl underline" href={`/product/${id}`}>{name}</a>
      </p>
      <p><img src={image} alt=""/></p>
      <p className="mt-4 text-2xl text-right">
        {price}
      </p>
    </div>
  );
};
