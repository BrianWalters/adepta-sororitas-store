import {ProductViewModel} from "@/ViewModel/types/ProductViewModel";
import {cms, CmsProductListing} from "@/CMS";
import {VariantViewModel} from "@/ViewModel/types/VariantViewModel";
import {commerce} from "@/Commerce";

export class ViewModel {
  public async getProducts(): Promise<ProductViewModel[]> {
    const productsFromCms = await cms.getProductListings()

    return Promise.all(productsFromCms.map(p => {
      return this.makeProductViewModelFromCmsProduct(p)
    }))
  }

  private async makeProductViewModelFromCmsProduct(productFromCms: CmsProductListing): Promise<ProductViewModel> {
    const skusFromCommerce: VariantViewModel[] = await Promise.all(
      (productFromCms?.variants || [])
        .map(v => this.makeVariantFromSkuCode(v.sku))
    )

    return {
      id: productFromCms._id,
      name: productFromCms.name,
      keywords: productFromCms.keywords || [],
      variants: skusFromCommerce
    }
  }

  private async makeVariantFromSkuCode(code: string): Promise<VariantViewModel> {
    const sku = await commerce.getProductBySku(code)

    return {
      id: sku.data[0].id,
      name: sku.data[0].attributes.name,
      sku: sku.data[0].attributes.code,
      imageUrl: sku.data[0].attributes.image_url,
      priceInCents: sku.included[0].attributes.amount_cents,
      priceFormatted: sku.included[0].attributes.formatted_amount,
    }
  }
}