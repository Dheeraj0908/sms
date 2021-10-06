import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCtWIZ6qLJpN_kTkgHb-6Tyjr-KQkNfxzU",
  authDomain: "mounts-otp.firebaseapp.com",
  projectId: "mounts-otp",
  storageBucket: "mounts-otp.appspot.com",
  messagingSenderId: "907804666877",
  appId: "1:907804666877:web:35083cd34c5017f69f4794"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
