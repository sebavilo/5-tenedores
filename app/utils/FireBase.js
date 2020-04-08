import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCDEsKBREirjUr0cQdBuuRx0NuaYKGh2DA",
    authDomain: "tenedores-cfb92.firebaseapp.com",
    databaseURL: "https://tenedores-cfb92.firebaseio.com",
    projectId: "tenedores-cfb92",
    storageBucket: "tenedores-cfb92.appspot.com",
    messagingSenderId: "947667160288",
    appId: "1:947667160288:web:cc29148e349c06fc209485"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);