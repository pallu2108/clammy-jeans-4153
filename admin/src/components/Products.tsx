import React, { ChangeEvent, useEffect, useState } from "react";
import { getProducts } from "../features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.productSlice);
//   const auth = useAppSelector((store) => store.authSlice);
//   const [client, setClient] = useState<string>("");
//   const [userId, email, password] = auth.token.split(":");
//   const [clientId, setClientId] = useState<string>("");
  return <div>
    {products.map((product)=>{

    })}
  </div>;
};

export default Products;
