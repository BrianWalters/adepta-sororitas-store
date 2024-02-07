import { createGroqBuilder, ExtractDocumentTypes } from 'groq-builder';
import { referenced, SanityValues } from '../../sanity-schema';

export const q = createGroqBuilder<{
  documentTypes: ExtractDocumentTypes<SanityValues>;
  referenceSymbol: typeof referenced;
}>();