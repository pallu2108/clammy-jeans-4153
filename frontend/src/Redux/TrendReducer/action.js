import * as types from "./actionTypes"
import axios from "axios";

const getTrendRecordRequest=()=>{
    return{
        type:types.GET_TREND_RECORD_REQUEST
    }
}

const getTrendRecord=(params)=>(dispatch)=>{
    dispatch(getTrendRecordRequest())
    return axios.get("https://truebuy.onrender.com/products",params)
    .then((r)=>{
        return dispatch({type:types.GET_TREND_RECORD_SUCCESS,payload:r.data})
    }).catch((e)=>{
        return dispatch({type:types.GET_TREND_RECORD_FAILURE})
    })
}


export {getTrendRecord}