import {ProductListingViewModel} from "@/ViewModel/types/ProductListingViewModel";
import {PortableText} from '@portabletext/react'
import {ComponentProps} from "react";

export interface ProductDetailViewModel extends ProductListingViewModel {
  keywords: string[],
  richDescription: ComponentProps<typeof PortableText>['value'],
}