export type productType = {
  _id?: string;
  id: number;
  title: string;
  brand: string;
  rating: number;
  mrp: number;
  price: number;
  quantity: number;
  images: [];
  colors: [];
  ddprice: {};
  productDesc: {};
  productFeatures: {};
  category: string;
  subcategory: string;
  flash?: boolean;
  bestDeals?: boolean;
  trending?: boolean;
  newArrival?: boolean;
};

export type productSliceType = {
  loading: boolean;
  error: boolean;
  errmsg: string;
  clients: productType[];
};
