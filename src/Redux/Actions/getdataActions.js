export const GETDATA="GETDATA";
export const SETDATA="SETDATA";
export const POSTDATA="POSTDATA";
export const UPDATEDATA="UPDATEDATA";
export const DELETEDATA="DELETEDATA";

export const getdatas=()=>{
    console.log("getdata action chandigdjdddddddddddddddddddddddddddddddarh",GETDATA);
    return {type:GETDATA};
}
export const setData=(value)=>{
    console.log(value,"setdataactioncalled")
    return {type:SETDATA,payload:value};
}
export  const postDatatoApi=(value)=>{

    return {type:POSTDATA, payload :value}
}
export const updateUserData=(value)=>{
    console.log(value,"updateUserDataAction")
    return {type:UPDATEDATA,payload:value};
}
export const deleteUserData=(value)=>{
    console.log(value,"deleteUserData")
    return {type:DELETEDATA,payload:value};
}
