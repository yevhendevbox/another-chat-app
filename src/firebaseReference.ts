import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {
  // your application settings
  apiKey: "AIzaSyDuXjA_-Zhs7tLWzpig4cDhq3xdbpfcejM",
  authDomain: "another-chat-app-8baf1.firebaseapp.com",
  databaseURL: "https://another-chat-app-8baf1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "another-chat-app-8baf1",
  storageBucket: "another-chat-app-8baf1.appspot.com",
  messagingSenderId: "1056193407000",
  appId: "1:1056193407000:web:898743fbe75b99be0dfb6d",
}
export const firebaseApp = () => { initializeApp(config) };
export const db = getFirestore(initializeApp(config));
