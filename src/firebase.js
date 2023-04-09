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
export function send(email) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log(auth, email, "auth", "emaill");
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