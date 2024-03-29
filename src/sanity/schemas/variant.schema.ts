import {defineField, defineType} from "@sanity-typed/types";
import {SchemaType} from "@/sanity/SchemaType";

export const variantSchema = defineType({
  name: SchemaType.Variant,
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "sku",
      type: "string",
      title: "SKU",
      description: "Stock keeping unit",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "imageUrl",
      type: "string",
      title: "Image URL",
      validation: Rule => Rule.required(),
    })
  ]
})