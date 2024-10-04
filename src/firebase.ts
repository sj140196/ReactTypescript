// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Define the Firebase configuration object with proper typing
const firebaseConfig = {
  apiKey: "AIzaSyDfl-AqvBWQgnSKuOgt0NkYuWj5TmVjAk8",
  authDomain: "my-app-77e81.firebaseapp.com",
  databaseURL: "https://my-app-77e81-default-rtdb.firebaseio.com",
  projectId: "my-app-77e81",
  storageBucket: "my-app-77e81.appspot.com",
  messagingSenderId: "1013559306306",
  appId: "1:1013559306306:web:40de6b5a04ed255f5d25db",
  measurementId: "G-B7DQ5KNKH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the database
const database = getDatabase(app);

export { database };
