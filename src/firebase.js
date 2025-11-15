import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXsxtDhSGDb_cO9KS9P6qHGIkxBFcSzUs",
  authDomain: "tripify-reactjs.firebaseapp.com",
  projectId: "tripify-reactjs",
  storageBucket: "tripify-reactjs.firebasestorage.app",
  messagingSenderId: "124666669158",
  appId: "1:124666669158:web:4e3516366718166122e5a7",
  measurementId: "G-T9HWSE31EG"
};

const app = initializeApp(firebaseConfig);

// DO NOT USE analytics — it breaks in local dev
// const analytics = getAnalytics(app);

const _auth = getAuth(app);
const _db = getFirestore(app);

export function getAppAuth() {
  return _auth;
}

export function getAppDB() {
  return _db;
}
