export interface Root {
  results: number
  metadata: Metadata
  data: Daum[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface Daum {
  sold?: number
  images: string[]
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  id: string
  priceAfterDiscount?: number
  availableColors?: any[]
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}

export default interface Product {
  id: string
  _id:string
  title: string
  description: string
  price: number
  imageCover: string
  images?: string[]
  ratingsAverage: number
  ratingsQuantity: number
  category: Category
  brand: Brand
}

export interface PageProps {
  searchParams: {
    page?: string
    sort?: string
    keyword?: string
    brand?: string
    "price[gte]"?: string
    "price[lte]"?: string
    "category[in]"?: string | string[]
  }
}

export interface CartItem {
  _id: string;
  product: {
    title: string;
    _id: string;
    imageCover: string;
    category: {
      name: string;
    };
    brand: {
      name: string;
    };
  };
  count: number;
  price: number;
};

export interface CartData {
  products: CartItem[];
  totalCartPrice: number;
  _id: string;
}