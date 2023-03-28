import { initializeApp } from "firebase/app";
import {getAuth,sendPasswordResetEmail} from "firebase/auth";
import { getStorage, ref, listAll,getDownloadURL } from "firebase/storage";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj-0vIjjVj1WnX4wziwFBDrU8o_h6PMLk",
  authDomain: "spotify-273c7.firebaseapp.com",
  projectId: "spotify-273c7",
  storageBucket: "spotify-273c7.appspot.com",
  messagingSenderId: "992210804347",
  appId: "1:992210804347:web:f49c5dfe3794de2e888cde"
};
export const app = initializeApp(firebaseConfig);
const storage = getStorage();
console.log(storage);
// export function lists(listofSongs,setListofsongs) {
//   let arr = [];
//   const listRef = ref(storage, "Musics/");
//   console.log(listRef, "ggh");
//   listAll(listRef)
//     .then((res) => {
//       res.prefixes.forEach((folderRef) => {
//         // All the prefixes under listRef.
//         // You may call listAll() recursively on them.
//       });
//       res.items.forEach((itemRef) => {
//         console.log("apps");
//           console.log(itemRef, "sdvfvvv");
//           getDownloadURL(ref(storage, `${itemRef._location.path}`)).then(
//             (url) => {
//               console.log(url, "pls");
//               arr.push(url);
//             }
//           );
//           console.log("state settled");
// setListofsongs(arr);
//       });
//     })
//     .catch((error) => {
//       // Uh-oh, an error occurred!
//     });
// }


export function send(email) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      console.log(auth, email, "auth", "emaill");
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, "error");
      // ..
    });
}

export const auth=getAuth();
export const db = getFirestore(app);