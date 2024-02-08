"use client"

import {FunctionComponent, useEffect, useState} from "react";
import {viewModel} from "@/ViewModel";
import {ProductViewModel} from "@/ViewModel/types/ProductViewModel";

export const ProductList: FunctionComponent = () => {
  const [products, setProducts] = useState<ProductViewModel[]>([])

  useEffect(() => {
    viewModel.getProducts().then(p => setProducts(p))
  }, [])

  return (
    <div>
      <details>
        <summary>Data</summary>
        <pre>{JSON.stringify(products, null, 1)}</pre>
      </details>
      <ul>
        {products.length > 0 && products.map((product) => (
          <li key={product.id}>
            <a className="text-2xl" href={`/product/${product.id}`}>{product.name}</a>
            <p>{product.name}</p>
            <p><img src="https://placehold.co/600x400" alt=""/></p>
          </li>
        ))}
      </ul>
    </div>
  );
};
