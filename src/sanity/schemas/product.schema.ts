import {defineType} from "@sanity/types";
import {defineArrayMember, defineField} from "sanity";
import {SchemaType} from "@/sanity/SchemaType";

export const productSchema = defineType({
  name: SchemaType.Product,
  type: 'document',
  fields: [
    defineField({
      name: "name",
      type: "string"
    }),
    defineField({
      name: "sku",
      title: "SKU",
      type: "string",
      description: "Stock keeping unit"
    }),
    defineField({
      name: "richDescription",
      type: "array",
      of: [
        defineArrayMember({
          type: "block"
        })
      ]
    }),
    defineField({
      name: "keywords",
      type: "array",
      of: [
        defineArrayMember({
          type: "string"
        })
      ]
    })
  ]
})