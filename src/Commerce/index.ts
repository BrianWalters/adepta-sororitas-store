import {Commerce} from "@/Commerce/Commerce";

export const commerce = new Commerce(
  process.env.COMMERCE_LAYER_CLIENT_ID!,
  process.env.COMMERCE_LAYER_CLIENT_SECRET!,
  process.env.COMMERCE_LAYER_BASE_ENDPOINT!
)