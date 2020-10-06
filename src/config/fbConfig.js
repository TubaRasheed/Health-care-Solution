import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDiHSFIbBKkUlm4EP7iG7VfOzCss4QRQMw",
  authDomain: "final-project-bca86.firebaseapp.com",
  databaseURL: "https://final-project-bca86.firebaseio.com",
  projectId: "final-project-bca86",
  storageBucket: "final-project-bca86.appspot.com",
  messagingSenderId: "693638703582",
  appId: "1:693638703582:web:fbd6bf58dd2a93ae9f154f",
  measurementId: "G-ZCWRKWMTYP"
};

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  export default firebase;
