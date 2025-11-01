import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_LOGO, Profile } from "../utils/contraints"; // Importing the Netflix logo from constraints file

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return unsubscribe;
  }, [dispatch]);

  const handlesignout = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
    
    }).catch((error) => {
  // An error happened.
    });
  }

  return (
    <div className="w-full absolute py-10 px-10 bg-gradient-to-b from-black to-transparent flex justify-between items-center z-10">
      <img 
        className="w-32" // Adjusted width for Netflix logo
        src={Netflix_LOGO}
        alt="Netflix Logo"
      />
      <div className="flex items-center space-x-4">
        <img
          
          src={Profile}
          alt="Profile"
          className="w-8 h-8 rounded cursor-pointer hover:border-2 hover:border-white transition-all"
        />
        <button className="text-white" onClick={handlesignout}>Sign out</button>
      </div>
    </div>
  );
};

export default Header;
