import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import Offline from "../components/Offline";
import Shop from "../pages/Shop";
import Sale from "../pages/Sale";
import Premium from "../pages/Premium";
import ClothDetails from "../pages/ClothDetails";

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
  {
    path: "/offline",
    element: <Offline />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/sale",
    element: <Sale />
  },
  {
    path: "/premium",
    element: <Premium />
  },
  {
    path: "/details/:id",
    element: <ClothDetails />
  },
]);


