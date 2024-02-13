import {CommerceRepository} from "@/Commerce/CommerceRepository";
import {CommerceSyncer} from "@/Commerce/CommerceSyncer";

export const commerceRepository = new CommerceRepository(
  process.env.NEXT_PUBLIC_COMMERCE_LAYER_CLIENT_ID!,
  process.env.NEXT_PUBLIC_COMMERCE_LAYER_BASE_ENDPOINT!
)

export const commerceSyncer = new CommerceSyncer(
  process.env.NEXT_PUBLIC_COMMERCE_LAYER_CLIENT_ID!,
  process.env.COMMERCE_LAYER_CLIENT_SECRET!,
  process.env.NEXT_PUBLIC_COMMERCE_LAYER_BASE_ENDPOINT!
)