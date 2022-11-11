export type authStateSliceType = {
    loading: boolean;
    error: boolean;
    token: string;
    isAuth: boolean
}

export type authActionpropType = {
    type: string;
    payload: {status: string, token: string, username: string, email: string, password: string, message:string}
}

export type authResType = {
    token: string;
    status: string
}

export type productType = {
  _id?: string;
  id: number;
  title: string;
  brand: string;
  rating: number;
  mrp: number;
  price: number;
  quantity: number;
  images: string[];
  colors: string[];
  ddprice: {[index: string]: number};
  productDesc: {[index: string]: string};
  productFeatures: {[index: string]: string};
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
  products: productType[];
};
