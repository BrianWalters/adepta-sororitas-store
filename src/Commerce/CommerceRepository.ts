import {authentication} from "@commercelayer/js-auth";
import {getTokenFromCookies, setTokenInCookies} from "@/Commerce/cookies";

export class CommerceRepository {
  constructor(private clientId: string, private base: string) {
  }

  private async getToken(): Promise<string> {
    const cookie = await getTokenFromCookies()

    if (cookie && cookie.value)
      return cookie.value

    return await this.fetchNewToken()
  }

  private async fetchNewToken(): Promise<string> {
    const response = await authentication("client_credentials", {
      clientId:  this.clientId,
      slug: "adepta-sororitas",
      scope: "market:17039"
    });

    await setTokenInCookies(response.accessToken, response.expires)

    return response.accessToken
  }

  public async getProducts(): Promise<any> {
    const response = await fetch(`${this.base}/api/skus`, {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Authorization': `Bearer ${await this.getToken()}`
      }
    })

    return await response.json()
  }

  public async getProductById(id: string): Promise<any> {
    const url = new URL(
      `${this.base}/api/skus/${id}`,
    )
    const queryParams = new URLSearchParams({
      include: "prices"
    })
    const response = await fetch(`${url}?${queryParams}`, {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Authorization': `Bearer ${await this.getToken()}`
      }
    })

    return await response.json()
  }

  public async getProductBySku(sku: string): Promise<any> {
    const url = `${this.base}/api/skus`
    const queryParams = new URLSearchParams({
      include: "prices",
      "filter[q][code_eq]": sku
    })
    const response = await fetch(`${url}?${queryParams}`, {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Authorization': `Bearer ${await this.getToken()}`
      }
    })

    return await response.json()
  }
}