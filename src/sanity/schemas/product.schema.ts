import {defineArrayMember, defineField, defineType} from "@sanity-typed/types";
import {SchemaType} from "@/sanity/SchemaType";

export const productSchema = defineType({
  name: SchemaType.Product,
  type: 'document',
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "richDescription",
      type: "array",
      of: [
        defineArrayMember({
          type: "block"
        })
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "keywords",
      type: "array",
      of: [
        defineArrayMember({
          type: "string"
        })
      ]
    }),
    defineField({
      name: "variants",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: SchemaType.Variant }]
        })
      ],
      validation: Rule => Rule.min(1)
    })
  ]
})