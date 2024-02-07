import React from "react"
import { Studio } from "./Studio"

export default function StudioPage() {
  return <Studio />
}

export async function generateStaticParams() {
  return ["studio"]
}
