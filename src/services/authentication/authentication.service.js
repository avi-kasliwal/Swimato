import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTQDna8ALPMNt1QaPL7UWv21Tfx1WJwq0",
  authDomain: "swimato-b52c7.firebaseapp.com",
  projectId: "swimato-b52c7",
  storageBucket: "swimato-b52c7.appspot.com",
  messagingSenderId: "608619610201",
  appId: "1:608619610201:web:ae086849c1b3dbae1a3148",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
