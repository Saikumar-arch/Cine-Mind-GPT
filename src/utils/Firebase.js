import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkEftdCO4RN_7mkR70zURaEBSvPeX-7Dc",
  authDomain: "cinemindgpt-d022c.firebaseapp.com",
  projectId: "cinemindgpt-d022c",
  storageBucket: "cinemindgpt-d022c.firebasestorage.app",
  messagingSenderId: "117141587534",
  appId: "1:117141587534:web:5bbd8780699dc976f7251f",
  measurementId: "G-M5FMZHSYE5"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]; 

// Initialize analytics only if app is running in a supported environment.
let analytics;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.warn("Analytics not supported", error);
}

const auth = getAuth(app);

export { app, analytics, auth };
