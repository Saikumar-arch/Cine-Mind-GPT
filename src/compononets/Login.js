import Header from "./Header";
import { useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { FormValidations } from "../utils/Validartions";
import { auth } from "../utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { Netflix_BACKGROUND, Photo_Url } from "../utils/contraints";

const Login = () => {
  
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear errors when switching forms
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = async () => {
    // Validate email and password
    if (!email.current || !password.current) {
      setErrorMessage("Form fields not properly initialized");
      return;
    }

    const validationMessage = FormValidations(email.current.value, password.current.value);
    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }
    setErrorMessage(null);

    // Sign-up process
    if (!isSignInForm) {
      if (!name.current || !name.current.value) {
        setErrorMessage("Name is required for sign up");
        return;
      }
      try {
        console.log("Attempting sign up...");
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        // Update profile with displayName and photoURL
        await updateProfile(user, {
          displayName: name.current.value,
          photoURL: Photo_Url
        });
        // Optionally reload to ensure profile is refreshed
        await user.reload();
        const updatedUser = auth.currentUser;
        console.log("Updated user:", updatedUser);
        const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
        dispatch(
        addUser({
        uid,
        email: userEmail,
        displayName,
        photoURL
       })
      );
        
      } catch (error) {
        console.error("Sign up error:", error);
        setErrorMessage(error.code + ": " + error.message);
      }
    }
    // Sign-in process
    else {
      try {
        console.log("Attempting sign in...");
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || "",
            photoURL: user.photoURL || ""
          })
        );
        
      } catch (error) {
        console.error("Sign in error:", error);
        setErrorMessage(error.code + ": " + error.message);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src={Netflix_BACKGROUND}
          alt="Netflix Background"
          className="w-full h-screen object-cover"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleValidation();
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full max-w-md p-8 bg-black bg-opacity-75 rounded">
            <h1 className="text-3xl text-white font-bold mb-6 text-center">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={name}
                className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
                type="text"
                placeholder="Full Name"
                required
              />
            )}
            <input
              ref={email}
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
              type="email"
              placeholder="Email Address"
              required
            />
            <input
              ref={password}
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
              type="password"
              placeholder="Password"
              required
            />
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <button
              className="w-full p-3 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition-colors"
              type="submit"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-gray-400 mt-4 text-center">
              {isSignInForm ? "New to CineMind? " : "Already have an account? "}
              <span 
                onClick={toggleSignIn} 
                className="text-white hover:underline cursor-pointer"
              >
                {isSignInForm ? "Sign up now" : "Sign in"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;