import {authentication} from "@commercelayer/js-auth";

export class CommerceSyncer {
  private token: string|null = null

  constructor(private clientId: string, private clientSecret: string, private base: string) {

  }

  private async fetchNewToken(): Promise<string> {
    const response = await authentication("client_credentials", {
      clientId:  this.clientId,
      clientSecret: this.clientSecret,
      slug: "adepta-sororitas",
      scope: "market:17039"
    });

    return response.accessToken
  }

  private async getToken(): Promise<string> {
    if (!this.token)
      this.token = await this.fetchNewToken()

    return this.token
  }

  public async createSku(args: { name: string, code: string, imageUrl: string }) {
    const response = await fetch(`${this.base}/api/skus`, {
      method: "POST",
      headers: {
        'Accept': 'application/vnd.api+json',
        'Authorization': `Bearer ${await this.getToken()}`
      },
      body: JSON.stringify({
        data: {
          type: "skus",
          attributes: {
            code: args.code,
            name: args.name,
            image_url: args.imageUrl
          }
        }
      })
    })

    return await response.json()
  }
}