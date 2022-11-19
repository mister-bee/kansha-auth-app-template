import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_APP_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {

      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const { user } = result;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("user", user);// add this to provider
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOutWithGoogle = () => {
  signOut(auth).then(() => {
    localStorage.clear()
    console.log("Signout successfull")

  }).catch((error) => {
    console.log("Signout error", error)
  });
}

// init db services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

getDocs(colRef).then((snapshot) => {
  let books = []
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data() })
  })

  console.log("books", books)
})


    // Sign-out successful.
    // localStorage.setItem("name", "");
    // localStorage.setItem("email", "");
    // localStorage.setItem("profilePic", "");
    // localStorage.setItem("user", "");