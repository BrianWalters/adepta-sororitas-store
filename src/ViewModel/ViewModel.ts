import {ProductViewModel} from "@/ViewModel/types/ProductViewModel";
import {cms} from "@/CMS";

export class ViewModel {
  public async getProducts(): Promise<ProductViewModel[]> {
    const productsFromCms = await cms.getProducts()

    return productsFromCms.map(p => ({
      id: p._id,
      name: p.name,
      keywords: p.keywords || [],
      variants: (p.variants || []).map(v => ({
        name: v.name
      }))
    }))
  }
}