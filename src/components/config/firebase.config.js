import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-Nz36xV7tzuv2J5ceBWjTA6iwv57CfcU",
  authDomain: "flockey-30bbf.firebaseapp.com",
  projectId: "flockey-30bbf",
  storageBucket: "flockey-30bbf.appspot.com",
  messagingSenderId: "449947111305",
  appId: "1:449947111305:web:a15277e350fbe50fd35b58"
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig