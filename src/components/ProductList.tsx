"use client"

import {FunctionComponent, useEffect, useState} from "react";
import {viewModelProvider} from "@/ViewModel";
import {ProductListingViewModel} from "@/ViewModel/types/ProductListingViewModel";
import {ProductCard} from "@/components/ProductCard";

export const ProductList: FunctionComponent = () => {
  const [products, setProducts] = useState<ProductListingViewModel[]>([])

  useEffect(() => {
    viewModelProvider.getProducts().then(p => setProducts(p))
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
            <ProductCard id={product.id} name={product.name} image={product.variants[0].imageUrl}
                         price={product.variants[0].priceFormatted}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
