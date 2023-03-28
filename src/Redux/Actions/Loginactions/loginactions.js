
export const Login=(loggedin)=>{
    return {
        type:"LOGIN",
        loggedin
    }
}
export const Logout=(loggedinuser)=>{
    return {
        type:"LOGOUT",
        loggedinuser
    }
}