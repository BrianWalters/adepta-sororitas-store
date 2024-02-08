import {VariantViewModel} from "@/ViewModel/types/VariantViewModel";

export interface ProductViewModel {
  id: string
  name: string
  keywords: string[]
  variants: VariantViewModel[]
}