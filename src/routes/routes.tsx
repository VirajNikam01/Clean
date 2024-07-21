import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: "/up",
    element: <SignUp />
  },
  {
    path: "/in",
    element: <SignIn />
  },
]);


