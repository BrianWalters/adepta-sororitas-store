"use client"

import {FunctionComponent, useEffect, useState} from "react";
import {viewModel} from "@/ViewModel";
import {ProductViewModel} from "@/ViewModel/types/ProductViewModel";
import {ProductCard} from "@/components/ProductCard";

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
      <ul className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]">
        {products.length > 0 && products.map((product) => (
          <li key={product.id}>
            <ProductCard id={product.id} name={product.name} image="https://placehold.co/600x400" />
          </li>
        ))}
      </ul>
    </div>
  );
};
