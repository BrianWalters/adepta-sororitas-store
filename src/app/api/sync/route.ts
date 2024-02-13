import {NextRequest, NextResponse} from "next/server";
import {parseBody} from "next-sanity/webhook";
import {SchemaType} from "@/sanity/SchemaType";
import {commerceSyncer} from "@/Commerce";
import {z} from "zod";

export async function POST(request: NextRequest) {
  const {isValidSignature, body} = await parseBody(request, secret)

  if (!isValidSignature) {
    console.log("unauthorized webhook attempt thwarted")
    return new NextResponse("Unauthorized", {status: 401})
  }

  console.log(`==SYNC WEBHOOK==`, body)

  const webhookPayload = webhookPayloadSchema.parse(body)

  await commerceSyncer.createSku({
    name: webhookPayload.name,
    code: webhookPayload.sku,
    imageUrl: webhookPayload.imageUrl
  })

  return new NextResponse("Done")
}

const secret = process.env.SANITY_WEBHOOK_SECRET ?? ""

const webhookPayloadSchema = z.object({
  _type: z.literal(SchemaType.Variant),
  name: z.string(),
  sku: z.string(),
  imageUrl: z.string()
})