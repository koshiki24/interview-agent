import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-5a9c7.firebaseapp.com",
  projectId: "interviewiq-5a9c7",
  storageBucket: "interviewiq-5a9c7.firebasestorage.app",
  messagingSenderId: "888975070527",
  appId: "1:888975070527:web:264a21de0e97e4554eaf8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});


export {auth , provider }