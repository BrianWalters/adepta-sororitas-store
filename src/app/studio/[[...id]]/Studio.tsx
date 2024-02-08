"use client"

import { NextStudio } from "next-sanity/studio"
import sanityConfig from "@/sanity/sanity.config"

export function Studio() {
  return (
    <>
      {/* @ts-ignore */}
      <NextStudio config={sanityConfig} />
    </>
  )
}
