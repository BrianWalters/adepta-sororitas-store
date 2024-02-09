"use client"

import {FunctionComponent, useEffect, useState} from "react";
import {commerce} from "@/Commerce";

interface ProductDetailProps {
  id: string
}

export const ProductDetail: FunctionComponent<ProductDetailProps> = ({id}) => {
  const [product, setProduct] = useState<any>()

  useEffect(() => {
    commerce.getProductById(id).then(p => setProduct(p))
  }, [id])

  return (
    <div>
      <details>
        <summary>Response</summary>
        <pre>{JSON.stringify(product, null, 1)}</pre>
      </details>
      {product && (
        <div>
          <h1 className="text-4xl">{product.data.attributes.name}</h1>
          <p><img src={product.data.attributes.image_url} alt=""/></p>
          <p>{product.data.attributes.description}</p>
        </div>
      )}

    </div>
  );
};
