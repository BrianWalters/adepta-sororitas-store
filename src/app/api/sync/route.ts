import {NextRequest, NextResponse} from "next/server";
import {parseBody} from "next-sanity/webhook";
import {SchemaType} from "@/sanity/SchemaType";
import {commerceSyncer} from "@/Commerce";
import {z} from "zod";

export async function POST(request: NextRequest) {
  const { isValidSignature, body } = await parseBody(request, secret)

  if (!isValidSignature) {
    console.log("unauthorized webhook attempt thwarted")
    return new NextResponse("Unauthorized", { status: 401 })
  }

  console.log(body)

  const webhookPayload = webhookPayloadSchema.parse(body)

  if (webhookPayload._type === SchemaType.Variant && webhookPayload.operation === "create") {
    await commerceSyncer.createSku({ name: "test", code: "test" })
  }

  return new NextResponse("Noop")
}

const secret = process.env.SANITY_WEBHOOK_SECRET ?? ""

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