import {authentication} from "@commercelayer/js-auth";
import {getTokenFromCookies, setTokenInCookies} from "@/Commerce/cookies";

export class Commerce {
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
}