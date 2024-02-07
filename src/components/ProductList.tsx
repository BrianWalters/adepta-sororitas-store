"use client"

import {FunctionComponent, useEffect, useState} from "react";
import {commerce} from "@/Commerce";

export const ProductList: FunctionComponent = () => {
  const [products, setProducts] = useState<any>()

  useEffect(() => {
    commerce.getProducts().then(p => setProducts(p))
  }, [])

  return (
    <div>
      <details>
        <summary>Response</summary>
        <pre>{JSON.stringify(products, null, 1)}</pre>
      </details>
      <ul>
        {products && Array.isArray(products.data) && products.data.map((datum: any) => (
          <li key={datum.id}>
            <a className="text-2xl" href={`/product/${datum.id}`}>{datum.attributes.name}</a>
            <p>{datum.attributes.description}</p>
            <p><img src={datum.attributes.image_url} alt=""/></p>
          </li>
        ))}
      </ul>
    </div>
  );
};
