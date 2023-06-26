
import { takeLatest, put, all, call } from "redux-saga/effects";
import { GETDATA,SETDATA, setData,POSTDATA, postDatatoApi, UPDATEDATA, DELETEDATA } from "Redux/Actions/getdataActions";
import axios from "axios";


function* getUserData() {
 console.log("gettinguserdata saGAAA");
//  const isLoading=useSelector(state=>state.getUserData.isLoading)
const {data}= yield axios.get("https://getapi-2abce-default-rtdb.firebaseio.com/usersData.json");
 console.log(data," firebase data fromgetuserdata saga generator");
 let userDataWithKey=[];
 for (let key in data){
userDataWithKey.push({...data[key],key});
 }
 console.log(userDataWithKey,"userDataWithKey");

 yield put(setData({userDataWithKey,isLoading:true}));


} 
        function* postData({payload}){
            console.log(payload,"userInfooooooooooooooooooooooooo")
           const response=yield axios.post("https://getapi-2abce-default-rtdb.firebaseio.com/usersData.json",payload);
           console.log("postDatatoApi generator function called")
           yield call (getUserData);

        }
        function* updateData({payload}) {
            console.log(payload,"UPDATEDDATASAGAAAAAAAAAAAAAAAAAA")
            const res=yield axios.patch(`https://getapi-2abce-default-rtdb.firebaseio.com/usersData/${payload.key}.json`,payload);
            console.log("updatedDataPatchresposne",res);
            yield call (getUserData);
        }
        function* deleteData({payload}) {
            console.log(payload,"deleteDataSAGAAAAAAAAAAAAAAAAAAAAAAAA")
            const res=yield axios.delete(`https://getapi-2abce-default-rtdb.firebaseio.com/usersData/${payload}.json`);
            console.log("updatedDataPatchresposne",res);
            yield call (getUserData);
        }
function* Sagaa() {
    yield all([
        takeLatest(POSTDATA,postData),
        takeLatest(GETDATA,getUserData),
        takeLatest(UPDATEDATA,updateData),
        takeLatest(DELETEDATA,deleteData),
    ])  
    
  }
export default Sagaa;
// console.log(Object.values(data),"values sunil jain");
//  const keys=Object.keys(data);
//  
//  console.log(res,"res");
// //  yield put(setData(data))
// yield call(setUserData);
  // function* setUserData(payload) {
 
    //     console.log("setUserdata called katikkkkkkkkkkkkkkkkkkkkkkkkkkkkk to ayush",);
    //     }