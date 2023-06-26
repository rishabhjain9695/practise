import React, { useEffect } from 'react'
import "./UserTable.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { deleteUserData, getdatas } from 'Redux/Actions/getdataActions';

function UserDataTable() {
  const navigate=useHistory();
  const dispatch=useDispatch();
  const userDataWithKeyArray=useSelector(state=>state.getUserData);
  const isLoading=useSelector(state=>state.getUserData.isLoading);
  console.log(userDataWithKeyArray,"userDataWithKeyArray");
  console.log(isLoading,"userDataisLoading");
  const deleteUser=(key)=>{
    console.log("deeeeeeeeeeeeeee")
    const deletedOb=userDataWithKeyArray.data.find((user)=>user.key==key);
    dispatch(deleteUserData(deletedOb.key));
    console.log(deletedOb)

  }
  return (
    <div>
    <button  className="btn btn-primary " onClick={()=>navigate.push('/')}>Back</button>
      <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">College</th>
      <th scope="col">Profession</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    { isLoading ? (userDataWithKeyArray.data.length>0 ? userDataWithKeyArray.data.map((user,index)=>{
            console.log("user");
      return (
        <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.college}</td>
      <td>{user.profession}</td>
      <td>{user.password}</td>
      <td><i className="fa-solid fa-pen-to-square" style={{color:'green'}} onClick={()=>navigate.push(`/${user.key}`)}></i></td>
      <td><i className="fa-solid fa-trash" style={{color:'red'}} onClick={()=>deleteUser(user.key)}></i></td>
    </tr>   )
      
    }) :<tr><td>NO DATA FOUNDDDDDDDDDD</td></tr>) :
    (<tr>
    <td>.............Loadingggg</td>
    </tr>)}

  </tbody>
</table>


    </div>
  )
}

export default UserDataTable
