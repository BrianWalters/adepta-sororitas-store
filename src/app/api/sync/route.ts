import {NextRequest, NextResponse} from "next/server";
import {webhookPayloadSchema} from "@/app/api/webhookPayloadSchema";
import {parseBody} from "next-sanity/webhook";
import {SchemaType} from "@/sanity/SchemaType";
import {commerceSyncer} from "@/Commerce";

export async function POST(request: NextRequest) {
  const { isValidSignature, body } = await parseBody(request, secret)

  if (!isValidSignature) {
    console.log("unauthorized webhook attempt thwarted")
    return new NextResponse("Unauthorized", { status: 401 })
  }

  const webhookPayload = webhookPayloadSchema.parse(body)

  if (webhookPayload._type === SchemaType.Variant && webhookPayload.operation === "create") {
    console.log(body)

    await commerceSyncer.createSku({ name: "test", code: "test" })
  }

  return new NextResponse("Noop")
}

const secret = process.env.SANITY_WEBHOOK_SECRET ?? ""