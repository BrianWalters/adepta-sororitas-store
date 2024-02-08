import {createClient, SanityClient} from "@sanity/client";
import {q} from "@/CMS/q";

export class Sanity {
  private client: SanityClient;

  constructor() {
    this.client = createClient({
      dataset: "production",
      projectId: "e33u1x09",
    });
  }

  public async getProducts() {
    const productsQuery = q.star
      .filterByType('product')
      .project(q => {
        return {
          _id: true,
          name: true,
          richDescription: true,
          keywords: true,
          variants: q.field('variants[]').deref().project(q => ({
            _id: true,
            name: true,
            sku: true
          }))
        }
      })

    const result = await this.client.fetch(productsQuery.query)

    return productsQuery.parse(result)
  }
}