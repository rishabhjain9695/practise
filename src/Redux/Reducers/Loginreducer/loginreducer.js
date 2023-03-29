import React from 'react'
const initialState={
    name:"token",
    loggedin:null
}
const loginreducer=(data=initialState,action)=>{
    switch (action.type) {
        case "LOGIN":
          return { ...data, loggedin: action.loggedin };
    
          case "LOGOUT":
            return { ...data, loggedin: action.loggedin };
        // case REHYDRATE:
        //   let persistedData = ((action || {}).payload).loginReducer || initalData
        //   console.log(persistedData, action,data,"persistedData<><<><><>")
        //   return {
        //     ...data,
        //     token:persistedData.token
        //   }
        default:
          return data;
      }
}

export default loginreducer
