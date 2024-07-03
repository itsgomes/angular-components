export type DummyProduct = {
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
}

export const PRODUCT_API_FIELDS: string[] = ['title', 'description', 'category', 'price', 'rating'];