import * as types from "./actionTypes"
import axios from "axios";

const getFlashRecordRequest=()=>{
    return{
        type:types.GET_FLASH_RECORD_REQUEST
    }
}

const getFlashRecord=(params)=>(dispatch)=>{
    dispatch(getFlashRecordRequest())
    return axios.get("http://localhost:8080/flash",params)
    .then((r)=>{
        return dispatch({type:types.GET_FLASH_RECORD_SUCCESS,payload:r.data})
    }).catch((e)=>{
        return dispatch({type:types.GET_FLASH_RECORD_FAILURE})
    })
}


export {getFlashRecord}