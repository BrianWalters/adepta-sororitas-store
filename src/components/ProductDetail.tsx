"use client"

import {FunctionComponent, useEffect, useState} from "react";
import {viewModelProvider} from "@/ViewModel";
import {ProductDetailViewModel} from "@/ViewModel/types/ProductDetailViewModel";
import {PortableText} from "@portabletext/react";
import {VariantList} from "@/components/VariantList";

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
        <summary>View Model</summary>
        <pre>{JSON.stringify(product, null, 1)}</pre>
      </details>
      {product && (
        <div className="lg:grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl">{product.name}</h1>
            <p>{product.keywords.join(", ")}</p>
            <PortableText value={product.richDescription}/>
          </div>
          <div>
            <VariantList variants={product.variants} />
          </div>
        </div>
      )}

    </div>
  );
};
