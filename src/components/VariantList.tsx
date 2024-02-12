"use client"

import {VariantViewModel} from "@/ViewModel/types/VariantViewModel";
import {FunctionComponent, useState} from "react";

interface VariantListProps {
  variants: VariantViewModel[]
}

export const VariantList: FunctionComponent<VariantListProps> = ({variants}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)

  return (
    <div>
      <p><img src={variants[selectedVariantIndex].imageUrl} alt=""/></p>
      {variants.length > 1 && (
        <form id="variant">
          <ul>
            {variants.map((v, index) => (
              <li key={v.id}>
                <label>
                  <input type="radio" name="variant" value={v.id} defaultChecked={index === selectedVariantIndex}
                         onChange={() => setSelectedVariantIndex(index)} />
                  {v.name}
                  <img src={v.imageUrl} height={100} width={100} alt=""/>
                </label>
              </li>
            ))}
          </ul>
        </form>
      )}
      <p className="text-2xl mt-4">{variants[selectedVariantIndex].priceFormatted}</p>
    </div>
  );
};
