import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBwSgNySqcgl2xU2Lu-WvGmGtu43CEA7hA",
  authDomain: "netflix-clone-6bd60.firebaseapp.com",
  projectId: "netflix-clone-6bd60",
  storageBucket: "netflix-clone-6bd60.appspot.com",
  messagingSenderId: "138196780279",
  appId: "1:138196780279:web:7c36a59235f185ebbb7ff2",
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase)

export { firebase };
