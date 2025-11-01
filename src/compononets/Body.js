import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Header from "./Header";

const Body = () => {
  const dispatch = useDispatch();

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Login />
        </>
      )
    },
    {
      path: "/browse",
      element: (
        <>
          <Header />
          <Browse />
        </>
      )
    }
  ]);



  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
