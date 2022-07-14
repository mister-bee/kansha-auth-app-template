import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_APP_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


const firebaseConfig_May26 = {
  apiKey: "AIzaSyBYOsBb4DDecxH22dZEOnPnnO3_ozLg86w",
  authDomain: "kansha-game-test.firebaseapp.com",
  projectId: "kansha-game-test",
  storageBucket: "kansha-game-test.appspot.com",
  messagingSenderId: "861585638720",
  appId: "1:861585638720:web:4c9fdf33ae4799deb926a5",
  measurementId: "G-2VP1LM7LXX"
};



// const firebaseConfig = {
//   apiKey: "AIzaSyANfoLDGZsVAl8NwHJUlgLrUynJJMaSsg0",
//   authDomain: "auth-8b1ef.firebaseapp.com",
//   projectId: "auth-8b1ef",
//   storageBucket: "auth-8b1ef.appspot.com",
//   messagingSenderId: "445273762769",
//   appId: "1:445273762769:web:81f403cae7cb5fe3760ef0",
// };


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
    // Sign-out successful.
    // localStorage.setItem("name", "");
    // localStorage.setItem("email", "");
    // localStorage.setItem("profilePic", "");
    // localStorage.setItem("user", "");
    console.log("Signout successfull")

  }).catch((error) => {
    console.log("Signout error", error)
  });
}