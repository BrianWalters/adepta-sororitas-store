import {VariantViewModel} from "@/ViewModel/types/VariantViewModel";

export interface ProductListingViewModel {
  id: string
  name: string
  variants: VariantViewModel[]
}