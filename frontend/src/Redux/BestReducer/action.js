import * as types from "./actionTypes"
import axios from "axios";

const getBestRecordRequest=()=>{
    return{
        type:types.GET_BEST_RECORD_REQUEST
    }
}

const getBestRecord=(params)=>(dispatch)=>{
    dispatch(getBestRecordRequest())
    return axios.get("https://truebuy.onrender.com/products",params)
    .then((r)=>{
        return dispatch({type:types.GET_BEST_RECORD_SUCCESS,payload:r.data})
    }).catch((e)=>{
        return dispatch({type:types.GET_BEST_RECORD_FAILURE})
    })
}


export {getBestRecord}