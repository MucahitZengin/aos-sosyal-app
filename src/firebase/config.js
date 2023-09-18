import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBbq2jHSIfbB6QDV7r4QJpqHWEp8EzZjxY",
    authDomain: "aos-sosyal-app-1.firebaseapp.com",
    projectId: "aos-sosyal-app-1",
    storageBucket: "aos-sosyal-app-1.appspot.com",
    messagingSenderId: "118219302592",
    appId: "1:118219302592:web:5c8c9d74e846cc7dfe6f25"
  };

  const app = initializeApp(firebaseConfig)

  const auth = getAuth(app)
  const db = getFirestore(app)

  export {auth,db}