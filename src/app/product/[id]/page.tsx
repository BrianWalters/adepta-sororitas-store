import {ProductDetail} from "@/components/ProductDetail";

interface Props {
  params: {
    id: string
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const {id} = params
  return (
    <main>
      <ProductDetail id={id} />
    </main>
  )
}