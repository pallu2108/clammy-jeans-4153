import React,{ReactElement} from 'react';
import { Navigate} from "react-router-dom";
import { useAppSelector } from '../features/hooks';

type AuthProps = {
    children : ReactElement
}

const RequireAuth = ({children}:AuthProps) => {
  const token = useAppSelector((store)=>store.authSlice.token);
  if(token){
    return children
  }
  return <Navigate to="/login" replace={true} />
};

export default RequireAuth;