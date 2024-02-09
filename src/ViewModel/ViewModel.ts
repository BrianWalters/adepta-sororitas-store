import {ProductViewModel} from "@/ViewModel/types/ProductViewModel";
import {cms} from "@/CMS";

export class ViewModel {
  public async getProducts(): Promise<ProductViewModel[]> {
    const productsFromCms = await cms.getProducts()

    return Promise.all(productsFromCms.map(p => {
      return new Promise<ProductViewModel>((resolve, reject) => {
        // const productsFromCommerce = Promise.all(
        //   p.variants.map(variant => commerce.getProductById())
        // )
        //
        resolve({
          id: p._id,
          name: p.name,
          keywords: p.keywords || [],
          variants: (p.variants || []).map(v => ({
            id: v._id,
            name: v.name,
            sku: v.sku
          }))
        })
      })
    }))
  }
}