// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import {
//     collection,arrayUnion,
//     getDocs,
//     getDoc,
//     addDoc,
//     doc,
//     updateDoc,
//     setDoc
//   } from "firebase/firestore";
//   import { db } from '../../firebase';
//   import CustomModal from 'Components/Cells/CustomModal/Custommodal';
// export function Modals() {
//     const[showModal,setShowModal]=useState(false);
//     const [listofSongs, setListofsongs] = useState([]);
//   const [playArray, setPlayArray] = useState([]);
//   const [songsUrl, setSongsUrl] = useState([]);
//   const [songdata,setSongData]=useState([]);
//   const[userToken,setUserToken]=useState(""); 
//   useEffect(()=>{
//     listsongs();
//      setUserToken(localStorage.getItem("userIdToken"))
//      console.log(useState,"usertoken");
//      const getdevref = collection(db, "songslist",);
//      getDocs(getdevref)
//        .then((response) => {
//          const a = response.docs.map((doc) => {
//            return(doc.data());
              
//          });
//          console.log(a,"vikas")
//          setSongData(a);
//          console.log("Songsssss", songdata);
//         //  console.log(m, "mmm");
//        })
//        .catch((error) => {
//          console.log(error);
//        });


//   },[])
//   function submitModal(){}
//   function listsongs() {
//     const getsongs = collection(db, "songslist");
//     getDocs(getsongs)
//       .then((response) => {
//         const a = response.docs.map((doc) => {
//           return {
//             data: doc.data(),
//             id: doc.id
//           };
//         });
//         setListofsongs(a);
//         console.log("aacheck", a);
//         // console.log(m, "mmm");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// //   return (
// //     // <div
// //     //   className="modal show"
// //     //   style={{ display: 'block', position: 'initial' }}
// //     // >
// //     //   <Modal.Dialog visible={false}>
// //     //     <Modal.Header closeButton>
// //     //       <Modal.Title>Modal title</Modal.Title>
// //     //     </Modal.Header>

// //     //     <Modal.Body>
// //     //     {listofSongs.map((e) => {
// //     //     {/* console.log(ind),"kk"); */}
// //     //     return (
// //     //       <div id="flexx">
// //     //       <div>
// //     //       <h1>{e.data.SongName}</h1>
// //     //       <audio controls>
// //     //         <source src={e.data.SongUrl} />
// //     //       </audio>
// //     //       {/* <button id={e.data.SongUrl} onClick={(e)=>{setSongs(e.target.id)}}>
// //     //         +
// //     //       </button> */}
// //     //       </div>
// //     //       </div>
// //     //     )
// //     //   })}
// //     //     {/* ) */}
// //     //   {/* })} */}
// //     //   {/* <button onClick={d}>op</button> */}
// //     // {/* </div> */}
// //     //     </Modal.Body>

// //     //     <Modal.Footer>
// //     //       <Button variant="secondary">Close</Button>
// //     //       {/* <Button variant="primary">Save changes</Button> */}
// //     //     </Modal.Footer>
// //     //   </Modal.Dialog>
// //     // </div>
// //   );
// return (
//     <div>
//         <CustomModal
//             footer={true}
//             header={true}
//             visible={showModal}
//             showModal={showModal}
//             setShowModal={setShowModal}
//             title={"Add New Song to your playlist"}
//             // btnText={"Add"}
//             onSubmitModal={submitModal}
//           >..................</CustomModal>
//     </div>
// )
// }