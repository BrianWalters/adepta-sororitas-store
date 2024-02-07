import {defineConfig} from '@sanity-typed/types'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {productSchema} from "@/sanity/schemas/product.schema";
import {SchemaType} from "@/sanity/SchemaType";
import { InferSchemaValues } from '@sanity-typed/types';
import {variantSchema} from "@/sanity/schemas/variant.schema";

const config = defineConfig({
  name: 'default',
  title: 'Adepta Sororitas Store',

  projectId: 'e33u1x09',
  dataset: 'production',
  basePath: "/studio",

  plugins: [structureTool({
    structure: (S, context) => {
      return S.documentTypeList(SchemaType.Product)
    }
  }), visionTool()],

  schema: {
    types: [
      productSchema,
      variantSchema
    ],
  },
})

export type SanityValues = InferSchemaValues<typeof config>;

export default config