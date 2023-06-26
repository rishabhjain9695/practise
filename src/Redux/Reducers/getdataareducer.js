import React from 'react'
// import { GETDATA, SETDATA } from 'Services/Api/Constants';
import { GETDATA,SETDATA } from 'Redux/Actions/getdataActions'

const initialState={
    data:{},isLoading:false
}
function getdataareducer(state=initialState,action) {
    switch (action.type) {
        case SETDATA:{
            console.log(action.payload,"payload in setdatareducer");
            return {data:action.payload.userDataWithKey, isLoading:action.payload.isLoading};
        }
        
        default:
            return state;
      }
}

export default getdataareducer
