import {Commerce} from "@/Commerce/Commerce";

export const commerce = new Commerce(
  process.env.NEXT_PUBLIC_COMMERCE_LAYER_CLIENT_ID!,
  process.env.NEXT_PUBLIC_COMMERCE_LAYER_BASE_ENDPOINT!
)