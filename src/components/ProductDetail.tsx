"use client"

import {FunctionComponent, useEffect, useState} from "react";
import {viewModelProvider} from "@/ViewModel";
import {ProductDetailViewModel} from "@/ViewModel/types/ProductDetailViewModel";
import {PortableText} from "@portabletext/react";

interface ProductDetailProps {
  id: string
}

export const ProductDetail: FunctionComponent<ProductDetailProps> = ({id}) => {
  const [product, setProduct] = useState<ProductDetailViewModel>()

  useEffect(() => {
    viewModelProvider.getProduct(id).then(p => setProduct(p))
  }, [id])

  return (
    <div>
      <details>
        <summary>Data</summary>
        <pre>{JSON.stringify(product, null, 1)}</pre>
      </details>
      {product && (
        <div>
          <h1 className="text-4xl">{product.name}</h1>
          <p className="text-2xl">{product.variants[0].priceFormatted}</p>
          <p>{ product.keywords.join(", ")}</p>
          <p><img src={product.variants[0].imageUrl} alt=""/></p>
          <PortableText value={product.richDescription} />
        </div>
      )}

    </div>
  );
};
