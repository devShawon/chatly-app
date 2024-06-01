import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQJpHcjXJdLaMregtcikwiVfyrpwbp23Y",
  authDomain: "chatlify-68c8b.firebaseapp.com",
  projectId: "chatlify-68c8b",
  storageBucket: "chatlify-68c8b.appspot.com",
  messagingSenderId: "423286602624",
  appId: "1:423286602624:web:c50af02995e21469165f65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig