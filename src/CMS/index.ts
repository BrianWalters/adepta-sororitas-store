import {Sanity} from "@/CMS/Sanity";

export const cms = new Sanity()

export type CmsProductListing = NonNullable<Awaited<ReturnType<typeof cms.getProductListings>>>[0]