import React from 'react'
const initialState={
loggedin:null
}
const loginreducer=(data=initialState,action)=>{
    switch (action.type) {
        case "LOGIN":
          return { ...data, loggedin: action.loggedin };
    
          case "LOGOUT":
            return { ...data, loggedin: action.loggedin,};
        default:
          return data;
      }
}

export default loginreducer
