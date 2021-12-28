import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDZ7Vdbo1CYiUSomZmAwgTiCNTfA7RtamU",
  authDomain: "wily-app-cf498.firebaseapp.com",
  projectId: "wily-app-cf498",
  storageBucket: "wily-app-cf498.appspot.com",
  messagingSenderId: "900591697698",
  appId: "1:900591697698:web:e7f0debf8f1cdc94a4af7b"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
  export default firebase.firestore();