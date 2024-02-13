import { z } from "zod"

export const webhookPayloadSchema = z.object({
  _id: z.string(),
  _type: z.string(),
  operation: z.union([
    z.literal("create"),
    z.literal("update"),
    z.literal("delete"),
  ]),
})

export type WebhookPayload = z.infer<typeof webhookPayloadSchema>
