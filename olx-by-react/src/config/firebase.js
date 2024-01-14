import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,doc, getDoc  } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB1CX5zfPEh6O4CMuPLCgiZLyvkPXON3S8",
    authDomain: "fir-authentication-d0f23.firebaseapp.com",
    projectId: "fir-authentication-d0f23",
    storageBucket: "fir-authentication-d0f23.appspot.com",
    messagingSenderId: "57005092175",
    appId: "1:57005092175:web:6673aeb9a2ce25da54293a",
    measurementId: "G-4KEMLNXK2E"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function getAllProducts(){
const querySnapshot = await getDocs(collection(db, "ads"));
const products = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  products.push({id:doc.id,...doc.data()})
});
return products
}
export async function getSingleAd(id){
  console.log(id)
const docRef = doc(db, "ads", id );
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return docSnap.data();
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}







